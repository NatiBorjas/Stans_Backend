const session = require("express-session");
let MongoDBStore = require('connect-mongodb-session')(session);
const { MONGOUSER, MONGOPSW } = require("./config");

const mongoSession = (app) => {
  app.use(
    session({
      store: new MongoDBStore({
        uri: `mongodb+srv://${MONGOUSER}:${MONGOPSW}@ecommerce.nflhe41.mongodb.net/?retryWrites=true&w=majority`,
        collection: 'session'
      }),
      secret: "topsecret",
      cookie: {
        httpOnly: false,
        secure: false,
        maxAge: 43200000,
      },
      rolling: true,
      resave: true,
      saveUninitialized: false,
    })
  );
};

module.exports = { mongoSession };
