const Users = require("../models/usuariosSchema");

const update = async (userId, cartId) => {
  return await Users.findOneAndUpdate({ _id: userId }, { cart_id: cartId });
};

module.exports = { update };
