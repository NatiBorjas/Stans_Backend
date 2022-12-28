const { Router } = require("express");
const passport = require("passport");
const { loginController } = require("../controllers/loginController");

const loginRouter = Router();

loginRouter.get("/", loginController.get);
loginRouter.get("/errorLogin", loginController.errorLogin);
loginRouter.post("/",passport.authenticate("login", { failureRedirect: "/login/errorlogin" }),
  loginController.postLogin
);

module.exports = loginRouter;
