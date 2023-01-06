const { errorLogger, urlMethodError } = require("../src/utils/logger");

const loginController = {
  get: (req, res) => {
    try {
      if (req.isAuthenticated()) {
        res.redirect("/productos");
      } else {
        res.status(200).render("pages/login");
      }
    } catch (error) {
      errorLogger.error(urlMethodError(req));
      return res
        .status(500)
        .send({ status: "Get page Log In error", body: error });
    }
  },
  postLogin: (req, res) => {
    try {
      const { username } = req.user;
      req.session.username = username;
      res.status(200).render("pages/miperfil", {
				user: req.user,
			});
    } catch (error) {
      errorLogger.error(urlMethodError(req));
      return res.status(500).send({ status: "Log In error", body: error });
    }
  },

  errorLogin: (req, res) => {
    try {
      res.status(200).render("pages/errorLogin");
    } catch (error) {
      errorLogger.error(urlMethodError(req));
      res.status(500).send({ status: "Log In error", body: error });
    }
  },
};

module.exports = { loginController };
