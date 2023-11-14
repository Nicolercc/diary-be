const db = require("../db/dbConfig.js");

const getAllEntries = async () => {
  try {
    const allEntries = await db.any("SELECT * FROM diary_entries");
    return allEntries;
  } catch (e) {
    return e;
  }
};

const getEntry = async (id) => {
  try {
    const entry = await db.one(
      "SELECT * FROM diary_entries WHERE entry_id=$1",
      id
    );
    return entry;
  } catch (e) {
    return null;
  }
};

const deleteEntry = async (id) => {
  try {
    const deletedEntry = await db.one(
      "DELETE FROM diary_entry WHERE entry_id=$1 RETURNING *",
      id
    );
    return deletedEntry;
  } catch (e) {
    return e;
  }
};

module.exports = {
  getAllEntries,
  getEntry,
  deleteEntry,
};
