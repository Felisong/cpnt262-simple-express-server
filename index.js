"use strict";

const express = require("express");
const path = require("node:path");
const app = express();
const port = 5000;

// test
const route = path.join(__dirname, "public");
const pages = path.join(__dirname, "pages");

// SERVER STATIC ASSETS
// ROUTING CODE
app.use(express.static(route));
app.use(express.static(pages));

// SERVING
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(pages, "about.html"));
});

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(pages, "404.html")); // Or render a custom 404 page
});
app.use((err, req, res, next) => {
  console.error(`Unhandled Error: ${err}`);
  res.status(500).sendFile(path.join(pages, "pages", "404.html"));
});

// app. listen

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
