"use strict";

const express = require("express");
const path = require("node:path");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Meow!");
});

app.get("/arr", (req, res) => {
  res.send([2, 4, 6, 10, 12, 14, 18, 20, 22]);
});

// this didnt work quite as intended.
app.get("/object-test", (req, res) => {
  res.send([
    { id: "123?", name: "Kinten", species: "kittyyy :D" },
    { id: "321", name: "Sethy", species: "my old cat" },
  ]);
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
