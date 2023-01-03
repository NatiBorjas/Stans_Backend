const {
  getAllMsg,
  saveMsg,
} = require("../daos/mensajesDaos");

const allMessages = async (options) => {
	if (options?.sort == true) {
		return  await getAllMsg(true);
  } else {
    return await getAllMsg();
  }
};

const saveMessage = async (mensaje) => {
	let timestamp = new Date();
	mensaje.timestamp = timestamp;
	await saveMsg(mensaje);
	return mensaje
};

module.exports = {allMessages, saveMessage}