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

// import diary entry into users and delete from app.js
//localhost:3004/users/2/entries
const diaryEntriesController = require("./controllers/entriesController");
app.use("/entries", diaryEntriesController);

//I AM NOT GETTING INDV ENTRIES PER USER -- I GET ALL

const usersController = require("./controllers/usersController");
app.use("/users", usersController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
