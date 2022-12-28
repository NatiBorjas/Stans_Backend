// const redis = require("redis");
// const connectRedis = require("connect-redis");
const session = require("express-session");
let MongoDBStore = require('connect-mongodb-session')(session);
const { MONGOUSER, MONGOPSW } = require("./config");


// const { REDIS_HOST, REDIS_PSW } = require("./config");

// const client = redis.createClient({
//   socket: {
//     host: REDIS_HOST,
//     port: 16626,
//   },
//   password: REDIS_PSW,
//   legacyMode: true,
// });

// client.connect();

// const RedisStore = connectRedis(session);

// const redisSession = (app) => {
//   app.use(
//     session({
//       store: new RedisStore({
//         host: REDIS_HOST,
//         port: 16626,
//         client,
//         ttl: 300,
//       }),
//       secret: "keyboard cat",
//       cookie: {
//         httpOnly: false,
//         secure: false,
//         maxAge: 86400000, // 1 dia
//       },
//       rolling: true,
//       resave: true,
//       saveUninitialized: false,
//     })
//   );
// };

const mongoSession = (app) => {
  app.use(
    session({
      store: new MongoDBStore({
        uri: `mongodb+srv://${MONGOUSER}:${MONGOPSW}@ecommerce.nflhe41.mongodb.net/?retryWrites=true&w=majority`,
        collection: 'session'
      }),
      secret: "topsecret",
      cookie: {
        httpOnly: false,
        secure: false,
        maxAge: 43200000,
      },
      rolling: true,
      resave: true,
      saveUninitialized: false,
    })
  );
};

module.exports = { mongoSession };
