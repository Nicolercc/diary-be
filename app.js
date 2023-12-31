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

const diaryEntriesController = require("./controllers/entriesController");
app.use("/entries", diaryEntriesController);

//for project purposes I will not be utilizing users
// const usersController = require("./controllers/usersController");
// app.use("/users", usersController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
