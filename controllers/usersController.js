const express = require("express");
const users = express.Router();

const diaryEntries = require("./entriesController");
users.use("/:user_id/entries", diaryEntries);

const {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
} = require("../queries/users");

users.get("/", async (req, res) => {
  const allUsers = await getAllUsers();
  if (allUsers.length > 0) {
    res.status(200).json(allUsers);
  } else {
    res.status(404).send({ error: "server error. request not found" });
  }
});

users.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await getUser(id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: "request not found -- must not exist" });
  }
});

//POST does not work
users.post("/", async (req, res) => {
  try {
    const newUser = await createUser(req.body);
    console.log("New User:", newUser);
    res.json(newUser);
  } catch (e) {
    res.status(400).json({ error: "Internal Server Error" });
  }
});

users.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedUser = await deleteUser(id);
  if (deletedUser) {
    res.status(200).json(deletedUser);
  } else {
    res.status(404).json("User not found");
  }
});

//UPDATE DOES NOT WORK
users.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedUser = await updateUser(id, req.body);

  if (updatedUser) {
    res.status(200).json(updatedUser);
  } else {
    res.status(404).json({ error: "error updating user details" });
  }
});

module.exports = users;
