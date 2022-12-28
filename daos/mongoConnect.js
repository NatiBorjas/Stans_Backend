const mongoose = require("mongoose");
const { MONGOUSER, MONGOPSW } = require("../src/config/config");
const { logger } = require("../src/utils/logger");

const connectMongoDB = () => {
  mongoose
    .connect(
      `mongodb+srv://${MONGOUSER}:${MONGOPSW}@ecommerce.nflhe41.mongodb.net/?retryWrites=true&w=majority`,
      { useNewUrlParser: true }
    )
    .then(() => {
      logger.info({ message: "Connected to Mongo Atlas" });
    })
    .catch((err) => logger.error({ message: err }));
};

const disconnectMongoDB = () => {
  mongoose.connection.close();
  logger.info({ message: "Disconnected from Mongo DB" });
};

module.exports = { connectMongoDB, disconnectMongoDB };
