const {chatSocket} = require("../../services/messageService");

const socketModel = (io) => {
  io.on("connection", async (socket) => {
    console.log("Usuarix conectadx: " + socket.id);
    chatSocket(socket, io);
  });
};

module.exports = { socketModel }