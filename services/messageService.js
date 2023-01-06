const { allMessages, saveMessage} = require("../controllers/mensajesController");
const { mensajesNormalize } = require("../src/normalizr/mensajesNormalize");


const chatSocket =  async (socket, io) => {
	let mensajes = await allMessages();
  io.sockets.emit("mensajes", mensajesNormalize(mensajes));

  socket.on("nuevo-mensaje", async (msje) => {
    let mensaje = JSON.parse(msje);
    await saveMessage(mensaje);
    let chat = await allMessages();
    io.sockets.emit("mensajes", mensajesNormalize(chat));
  });
};

module.exports = { chatSocket }