const express = require("express");
const cors = require("cors");

const { session } = require("./middlewares/session");
const { viewEngine } = require("./middlewares/viewEngine");

const { PORT } = require("./src/config/config");
const { connectMongoDB } = require("./daos/mongoConnect");
const mainRouter = require("./routes/mainRouter");

const app = express();
app.use(cors());

connectMongoDB();
viewEngine(app, express);
session(app);
mainRouter(app);

app.listen(PORT, () => {
  console.log("Servidor Funcionando en Puerto: " + PORT);
});
app.on("error", (error) => console.log(`Error en servidor ${error}`));
