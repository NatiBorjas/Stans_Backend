const { errorLogger, urlMethodError } = require("../src/utils/logger");
const {userPerfil} = require("../services/userService");

const perfilController = {
	get: async (req, res) => {
		try {
		if (req.isAuthenticated()) {
			res.render("pages/miperfil", {
				user: req.user,
			})}
		} catch (error) {
			errorLogger.error(urlMethodError(req));
		}
	}
}

module.exports = { perfilController };