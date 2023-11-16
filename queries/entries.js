const db = require("../db/dbConfig.js");
const { getUsers } = require("./users.js");

// const getAllEntries = async (user_id) => {
//   try {
//     const allEntries = await db.any(
//       "SELECT * FROM diary_entries WHERE user_id=$1",
//       [user_id]
//     );
//     return allEntries;
//   } catch (e) {
//     return e;
//   }
// };

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

const postEntry = async (entries) => {
  try {
    const newEntry = await db.one(
      "INSERT INTO diary_entries (user_id, title, content, mood, is_private) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        entries.user_id,
        entries.title,
        entries.content,
        entries.mood,
        entries.is_private,
      ]
    );
    return newEntry;
  } catch (e) {
    return e;
  }
};

const deleteEntry = async (id) => {
  try {
    const deletedEntry = await db.one(
      "DELETE FROM diary_entries WHERE entry_id=$1 RETURNING *",
      id
    );
    return deletedEntry;
  } catch (e) {
    return e;
  }
};

const updateEntry = async (entry) => {
  try {
    const updatedEntry = await db.one(
      "UPDATE diary_entries SET title=$1, content=$2, mood=$3, is_private=$4 WHERE id=$5 RETURNING *",
      [entry.title, entry.content, entry.mood, entry.is_private]
    );
    return updatedEntry;
  } catch (e) {
    return e;
  }
};

module.exports = {
  getAllEntries,
  getEntry,
  deleteEntry,
  postEntry,
  updateEntry,
};
