const { Router } = require("express");
const homeRouter = Router();

const homeController = require("../controllers/homeController");

// homeRouter.get("/", (req, res, next) => {
//   if (req.isAuthenticated()) {
//     res.render("pages/home", {
//       name: req.session.username,
//     });
//   } else {
//     res.redirect("/login");
//   }
// });

homeRouter.get("/", homeController.get);
homeRouter.get("/info", homeController.getInfo);

module.exports = homeRouter;
