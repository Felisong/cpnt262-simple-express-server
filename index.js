"use strict";

const express = require("express");
const path = require("node:path");
const app = express();
const port = 5000;

// Middleware current time
function currentTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const days = now.getDate();
  const months = now.getMonth();
  const year = now.getFullYear();

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}--${days} ${months} ${year}`;
}

function logger(req, res, next) {
  console.log(`Time: ${currentTime()}`);
  console.log(`method: ${req.method}`);
  console.log(`path: ${req.originalUrl}`);
  next();
}

app.use(logger);

// ROUTING CODE

app.get("/", (req, res) => {
  res.send("Meow!");
});

app.get("/arr", (req, res) => {
  res.send([2, 4, 6, 10, 12, 14, 18, 20, 22]);
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
