const { Router } = require("express");
const productController = require("../controllers/productController.js");

const productosRouter = Router();

productosRouter.get("/", productController.get);
productosRouter.get("/:id", productController.getIdProduct);
productosRouter.post("/", productController.post);
productosRouter.put("/:id", productController.put);
productosRouter.delete("/:id", productController.delete);

module.exports = productosRouter;
