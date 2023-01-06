const { errorLogger } = require("../src/utils/logger");
const {Mensajes} = require("../models/mensajeSchema");

const saveMsg = async (mensaje) => {
	await Mensajes.create(mensaje);
};

const getAllMsg = async () =>{
  try {
		return  await Mensajes.find({}).sort({ timestamp: -1 });
  } catch (error) {
		errorLogger.error({
      error: error.message,
    });
  }
}


module.exports = {saveMsg, getAllMsg}