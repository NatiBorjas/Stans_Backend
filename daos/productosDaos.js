// const { crearProductosApi } = require("../models/mockApi/index.js");
// const { errorLogger } = require("../src/utils/logger");

const { Productos } = require("../models/productSchema");

// const productosDaos = {
//   getData: async (req, res) => {
//     try {
//       let productos = await crearProductosApi(5);
//       if (productos.length > 0) {
//         res.render("pages/products", {
//           products: productos,
//           productsExist: true,
//         });
//       } else {
//         res.render("pages/products", {
//           products: productos,
//           productsExist: false,
//         });
//       }
//     } catch (e) {
// 			errorLogger.error({
// 				error: error.message,
// 			});
//       res.status(500).send({ error });
//     }
//   },
// };
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
// module.exports = {productosDaos}