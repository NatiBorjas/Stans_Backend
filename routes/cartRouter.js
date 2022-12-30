const { Router } = require("express");
const cartRouter = Router();

const cartController = require("../controllers/cartController");

cartRouter.get("/", cartController.get);
cartRouter.post("/", cartController.postBuy);
cartRouter.post("/producto", cartController.post);
cartRouter.delete("/:id/:idProd", cartController.deleteProd);
cartRouter.delete("/:id", cartController.deleteProdbyPage);

module.exports = cartRouter;
