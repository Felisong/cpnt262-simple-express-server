"use strict";

const express = require("express");
const path = require("node:path");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Meow!");
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
