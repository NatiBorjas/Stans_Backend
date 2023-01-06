const { Router } = require("express");
const {perfilController} = require("../controllers/perfilController.js");

const perfilRouter = Router();


perfilRouter.get("/", perfilController.get);

module.exports = perfilRouter