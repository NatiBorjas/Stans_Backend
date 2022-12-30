const passport = require("passport");
const { Strategy: LocalStrategy } = require("passport-local");

const Users = require("../models/usuariosSchema");
const { logger } = require("../src/utils/logger");
const { isValidPassword,  createHash,} = require("../src/utils/passwordsFunctions");

const login = {
  localStrategy: new LocalStrategy((username, password, done) => {
    Users.findOne({ username: username }, (err, user) => {
      if (err) return done(err);
      if (!user) {
        logger.info({ message: "Usuarix no encontrado: " + username });

        return done(null, false);
      }
      if (!isValidPassword(user, password)) {
        logger.info({ message: "Contraseña erronea" });
        return done(null, false);
      }

      return done(null, user);
    });
  }),
};

const signup = {
  localStrategy: new LocalStrategy(
    { passReqToCallback: true },
    (req, username, password, done) => {
      Users.findOne({ username: username }, function (error, user) {
        if (error) {
          logger.error({ message: "Error al registrarse: " + error });
          return done(error);
        }

        if (user) {
          logger.info({ message: "Ese usuarix ya existe" });
          return done(null, false);
        }

        const { name, age, address, phone } = req.body;
        const newUser = {
          name,
          age,
          address,
          phone,
          username: username,
          password: createHash(password),
          image: req.file.filename,
        };

        Users.create(newUser, (err, user) => {
          if (err) {
            logger.error({ message: "Error al guardar usuario: " + err });
            return done(err);
          }
          logger.info({ message: "Registro existoso" });
          return done(null, user);
        });
      });
    }
  ),
};

const serializeUser = () => {
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });
};
const deserializeUser = () => {
  passport.deserializeUser((id, done) => {
    Users.findById(id, done);
  });
};

module.exports = {
  login,
  signup,
  serializeUser,
  deserializeUser,
};
