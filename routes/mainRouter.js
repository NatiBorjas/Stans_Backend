const { logger } = require("../src/utils/logger");

const homeRouter = require("./homeRouter");
const loginRouter = require("./loginRouter");
const logoutRouter = require("./logoutRouter");
const signupRouter = require("./signupRouter");
const perfilRouter = require("./perfilRouter");
const productRouter = require("./productosRouter");
const cartRouter = require("./cartRouter");

const mainRouter = (app) => {
  app.use((req, res, next) => {
    logger.info({ URL: req.originalUrl, method: req.method });
    next();
  });

  app.get("/", (req, res) => {
    res.redirect("/login");
  });

  app.use("/login", loginRouter);
  app.use("/registro", signupRouter);
  app.use("/logout", logoutRouter);
  app.use("/home", homeRouter);
  app.use("/miperfil", perfilRouter);
  app.use("/productos", productRouter);
  app.use("/carrito", cartRouter);

  app.all("*", (req, res) => {
    logger.warn({ URL: req.originalUrl, method: req.method });
    res.status(404).end();
  });
};

module.exports = mainRouter;
