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

// test
const route = path.join(__dirname, "public");
const pages = path.join(__dirname, "pages");

// SERVER STATIC ASSETS
app.use(express.static(route));
app.use(express.static(path));

//test
app.use(express.Router);

// ROUTING CODE
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(pages, "about.html"));
});

app.get("/arrApi", (req, res) => {
  res.send([2, 4, 6, 10, 12, 14, 18, 20, 22]);
});

app.use((req, res, next) => {
  res.status(404).send("Page Not Found"); // Or render a custom 404 page
});
app.use((err, req, res, next) => {
  console.error(`Unhandled Error: ${err}`);
  res.status(500).send("Internal Server Error");
});

// app. listen

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
