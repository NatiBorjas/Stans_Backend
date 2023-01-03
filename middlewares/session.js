const passport = require("passport");
const { mongoSession } = require("../src/config/session");

const {
  login,
  signup,
  serializeUser,
  deserializeUser,
} = require("./passport");

const session = (app) => {
  mongoSession(app);
  passport.use("login", login.localStrategy);
  passport.use("signup", signup.localStrategy);
  serializeUser();
  deserializeUser();
	
  app.use(passport.initialize());
  app.use(passport.session());
  app.use((req, res, next) => {
    req.session.touch();
    next();
  });
};

module.exports = { session };
