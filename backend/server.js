"use strict";

const { application } = require("express");
const app = require("./app");
const { PORT } = require("./config");

// app.listen(PORT, function () {
//   console.log(`Started on http://localhost:${PORT}`);
// });

app.listen({ port: PORT, host: "0.0.0.0" });