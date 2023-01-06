const { update } = require("../daos/userDaos");

const userUpdate = async (userId, cartId) => {
  return await update(userId, cartId);
};

const userPerfil = async (userId) => {
	return await perfil(userId);
};

module.exports = { userUpdate, userPerfil };
