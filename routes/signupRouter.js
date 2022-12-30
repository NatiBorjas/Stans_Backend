const passport = require("passport");
const { Router } = require("express");
const { signupController } = require("../controllers/signupController");
const { uploadImg } = require("../middlewares/multer");
const signupRouter = Router();

signupRouter.get("/", signupController.get);
signupRouter.get("/errorregistro", signupController.errorSignup);
signupRouter.post("/", uploadImg, passport.authenticate("signup", { failureRedirect: "/registro/errorregistro" }),
  signupController.postsignup
);

module.exports = signupRouter;
