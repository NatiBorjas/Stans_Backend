const parseArgs = require("minimist");
const dotenv = require("dotenv");

dotenv.config();

const args = parseArgs(process.argv.slice(2));

const PORT = args.PORT || process.env.PORT || 8080;
const MONGOPSW = process.env.MONGO_PSW;
const MONGOUSER = process.env.MONGO_USER;

module.exports = { MONGOPSW, PORT, MONGOUSER };