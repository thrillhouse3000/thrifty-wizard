"use strict";

require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY || "secret-dev";

const PORT = +process.env.PORT || 8080;

let username = process.env.DB_USERNAME
let pass = process.env.DB_PASS
let host = process.env.DB_HOSTNAME

// Use dev database, testing database, or via env var, production database
function getDatabaseUri() {
  return (process.env.NODE_ENV === "test")
      ? "thrifty_wizard_test"
      : `postgres://${username}:${pass}@${host}:5432/thrifty_wizard`;
}

module.exports = {
  SECRET_KEY,
  PORT,
  getDatabaseUri,
};
