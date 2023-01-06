const { Router } = require("express");
const homeRouter = Router();

const homeController = require("../controllers/homeController");

homeRouter.get("/", homeController.get);

module.exports = homeRouter;
