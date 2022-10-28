"use strict";

require("dotenv").config();

const SECRET_KEY = process.env.SECRET_KEY || "secret-dev";

const PORT = +process.env.PORT || 3001;

// Use dev database, testing database, or via env var, production database
function getDatabaseUri() {
  return (process.env.NODE_ENV === "test")
      ? "thrifty_wizard_test"
      : process.env.DATABASE_URL || "thrifty_wizard";
}

module.exports = {
  SECRET_KEY,
  PORT,
  getDatabaseUri,
};
