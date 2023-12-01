const dotenv = require("dotenv");
dotenv.config();

const HOST = process.env.HOST;
const PORT = process.env.PORT;
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_DATABASE = process.env.DB_DATABASE;
const DB_PORT = process.env.DB_PORT;
const whiteListOrigin = process.env.WHITE_LIST_ORIGIN.split(',');

module.exports = {
    HOST,
    PORT,
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE,
    DB_PORT,
    whiteListOrigin
}