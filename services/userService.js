const { update } = require("../daos/userDaos");

const userUpdate = async (userId, cartId) => {
  return await update(userId, cartId);
};

module.exports = { userUpdate };
