// const { errorLogger } = require("../src/utils/logger");

const { Productos } = require("../models/productSchema");

const getAll = async () => {
  try {
    return await Productos.find({});
  } catch (error) {
    throw Error(error);
  }
};

const getById = async (id) => {
  try {
    return await Productos.findById(id);
  } catch (error) {
    throw Error(error);
  }
};

const save = async (product) => {
  try {
    await Productos.create(product);
    return;
  } catch (error) {
    throw new Error(error);
  }
};

const delet = async (id) => {
  try {
    await Productos.findByIdAndDelete(id);
    return id;
  } catch (error) {
    throw new Error(error);
  }
};

const update = async (id, newBody) => {
  try {
    await Productos.findByIdAndUpdate(id, newBody);
    return await getById(id);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getAll, getById, save, delet, update };
