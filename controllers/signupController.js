const { errorLogger } = require("../src/utils/logger");
const { sendEmail } = require("../services/emailService");

const signupController = {
  get: (req, res) => {
    try {
      if (req.isAuthenticated()) {
        res.redirect("/productos");
      } else {
        res.status(200).render("pages/registro");
      }
    } catch (error) {
      errorLogger.error({
        error: error.message,
      });
      return res
        .status(500)
        .send({ status: "Pagina de registro: Error (get)", body: error });
    }
  },
  postsignup: async (req, res) => {
    try {
      req.session.username = req.user;
			let user = req.session.username;
      await sendEmail(user);
			
      res.status(200).redirect("/home");
    } catch (error) {
      errorLogger.error({
        error: error.message,
      });
      return res
        .status(500)
        .send({ status: "Error de registro", body: error.message });
    }
  },

  errorSignup: (req, res) => {
    try {
      res.render("pages/errorregistro");
    } catch (error) {
      errorLogger.error({
        error: error.message,
      });
      res.status(500).send({ status: "Error de registro", body: error });
    }
  },
};

module.exports = { signupController };
