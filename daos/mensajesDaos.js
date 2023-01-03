const { errorLogger } = require("../src/utils/logger");
const {Mensajes} = require("../models/mensajeSchema");

const saveMsg = async (mensaje) => {
	await Mensajes.create(mensaje);
};


const getAllMsg = async (sort) =>{
  try {
    if (sort == true) {
			return  await Mensajes.find({}).sort({ timestamp: -1 });
    } else {
      return await Mensajes.find({});
    }
  } catch (error) {
		
		errorLogger.error({
      error: error.message,
    });
  }
}


module.exports = {saveMsg, getAllMsg}