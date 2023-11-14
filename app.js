const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("common"));

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to my Diary.com API");
});

// -----IMPORT AND USE THE CONTROLLERS------
const diaryEntriesController = require("./controllers/entriesController");
app.use("/entries", diaryEntriesController);

// const usersController = require("./controllers/reviewsController.js");
// app.use("/reviews", reviewsController);
// ------------------------------------------

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
