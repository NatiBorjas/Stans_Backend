const Usuarios = require("../models/usuariosSchema");

const update = async (userId, cartId) => {
  return await Usuarios.findOneAndUpdate({ _id: userId }, { cart_id: cartId });
};

const perfil = async (userId) => {
	return await Usuarios.findById({ _id: userId})
};

module.exports = { update, perfil };
