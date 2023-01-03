const mongoose = require("mongoose");

const schemaMensajes = new mongoose.Schema(
  {
    author: {
      id: { type: String, required: true },
      alias: { type: String, required: true },
      avatar: { type: String, required: true },
    },
    timestamp: { type: String, required: true },
    text: { type: String, required: true },
  },

  {
    versionKey: false,
  }
);

const Mensajes = mongoose.model("Mensajes", schemaMensajes );
module.exports = {Mensajes, schemaMensajes}
