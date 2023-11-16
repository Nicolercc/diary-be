const express = require("express");
const entries = express.Router({ mergeParams: true });

const {
  getAllEntries,
  getEntry,
  deleteEntry,
  postEntry,
  updateEntry,
} = require("../queries/entries");

/*
THIS IS A GET ALL ROUTE IF I WANT TO DISPLAY ONLY FOR A USER
entries.get("/", async (req, res) => {
  const { user_id } = req.params;
  const allEntries = await getAllEntries(user_id);
  if (allEntries.length > 0) {
    res.status(200).json(allEntries);
  } else {
    res.status(404).json({ error: "No entries found" });
  }
});
**/

entries.get("/", async (req, res) => {
  const allEntries = await getAllEntries();
  if (allEntries.length > 0) {
    res.status(200).json(allEntries);
  } else {
    res.status(404).json({ error: "No entries found" });
  }
});
entries.get("/:id", async (req, res) => {
  const { id } = req.params;
  const entry = await getEntry(id);
  if (entry) {
    res.json(entry);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

//post DOES NOT work
entries.post("/", async (req, res) => {
  const { user_id } = req.params;
  const entry = await postEntry({ user_id, ...req.body });
  res.status(200).json(entry);
});

entries.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedEntry = await deleteEntry(id);
  if (deletedEntry.id) {
    res.status(200).json(deletedEntry);
  } else {
    res.status(404).json({ error: "Entry not found" });
  }
});

//put request missing
entries.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedEntry = await updateEntry({ user_id, id, ...req.body });
  if (updatedReview.id) {
    res.status(200).json(updatedEntry);
  } else {
    res.status(404).json({ error: "Entry not found" });
  }
});

module.exports = entries;
