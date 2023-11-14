const express = require("express");
const entries = express.Router();
const { getAllEntries, getEntry, deleteEntry } = require("../queries/entries");

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

entries.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedEntry = await deleteEntry(id);
  if (deletedEntry.id) {
    res.status(200).json(deletedEntry);
  } else {
    res.status(404).json({ error: "Entry not found" });
  }
});

module.exports = entries;
