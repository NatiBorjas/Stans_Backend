const passport = require("passport");
const { Router } = require("express");
const { signupController } = require("../controllers/signupController");
const signupRouter = Router();

signupRouter.get("/", signupController.get);
signupRouter.get("/errorregistro", signupController.errorSignup);
signupRouter.post("/",passport.authenticate("signup", { failureRedirect: "/registro/errorregistro" }),
  signupController.postsignup
);

module.exports = signupRouter;
