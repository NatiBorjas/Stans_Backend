const {chatSocket} = require("../../services/messageService");

const socketModel = (io) => {
  io.on("connection", async (socket) => {
    console.log("Nuevo usuario conectado: " + socket.id);
    chatSocket(socket, io);
  });
};

module.exports = { socketModel }