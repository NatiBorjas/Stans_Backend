const {
  getById,
  getAll,
  save,
  delet,
  update,
} = require("../daos/productosDaos");

const getProductos = async () => {
  return await getAll();
};

const getProduct = async (id) => {
  return await getById(id);
};

const saveProduct = async (product) => {
  let necessaryProps = [
    "name",
    "description",
    "thumbnail",
    "price",
    "stock",
  ];
  let keys = Object.keys(product);
  let check = (arr, target) => target.every((e) => arr.includes(e));
  let validation = check(keys, necessaryProps);

  if (validation) {
    product.timestamp = new Date().toString();
    await save(product);
    return product;
  } else {
    throw new Error("Faltan propiedades");
  }
};
const deleteProduct = async (id) => {
  return await delet(id);
};

const updateProduct = async (id, newBody) => {
  await update(id, newBody);
};

module.exports = {
  getProductos,
  getProduct,
  saveProduct,
  deleteProduct,
  updateProduct,
};
