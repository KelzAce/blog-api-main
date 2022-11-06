require("dotenv").config();
const DATABASE_CONNECT_STRING = process.env.DATABASE_CONNECT_STRING;
const PORT = 8080 || process.env.PORT;
const SECRET = process.env.SECRET;

module.exports = {
  DATABASE_CONNECT_STRING,
  PORT,
  SECRET,
};
