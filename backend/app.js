"use strict";

const express = require("express");
const cors = require("cors");

const { NotFoundError } = require("./expressError");

const gamesRoutes = require("./routes/games");
const pricesRoutes = require("./routes/prices");
const storesRoutes = require("./routes/stores");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/games", gamesRoutes)
app.use("/prices", pricesRoutes)
app.use("/stores", storesRoutes)

/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
  return next(new NotFoundError());
});

/** Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res, next) {
  if (process.env.NODE_ENV !== "test") console.error(err.stack);
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

module.exports = app;