const express = require("express");
const cors = require("cors");
const { session } = require("./middlewares/session");
const { viewEngine } = require("./middlewares/viewEngine");
const { PORT } = require("./src/config/config");
const { connectMongoDB } = require("./daos/mongoConnect");
const mainRouter = require("./routes/mainRouter");

const { socketModel } = require("./src/sockets/socket");
const { createServer } = require("http");
const { Server } = require("socket.io");


const app = express();
app.use(cors());
const httpServer = createServer(app);
const io = new Server(httpServer, {});

connectMongoDB();
viewEngine(app, express);
session(app);
mainRouter(app);
// SOCKETS
socketModel(io);

httpServer.listen(PORT, () => {
  console.log("Servidor Funcionando en Puerto: " + PORT);
});
httpServer.on("error", (error) => console.log(`Error en servidor ${error}`));
