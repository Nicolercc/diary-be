const db = require("../db/dbConfig.js");

const getAllUsers = async () => {
  try {
    const allUsers = await db.any("SELECT * FROM users");
    return allUsers;
  } catch (e) {
    return e;
  }
};

const getUser = async (user_id) => {
  try {
    const user = await db.one("SELECT * FROM users WHERE user_id=$1", [
      user_id,
    ]);
    return user;
  } catch (e) {
    return e;
  }
};

const createUser = async (user) => {
  try {
    const newUser = await db.one(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
      [user.username, user.email, user.password]
    );
    return newUser;
  } catch (e) {
    return e;
  }
};

const deleteUser = async (user_id) => {
  try {
    const deletedUser = await db.one(
      "DELETE FROM users WHERE user_id=$1 RETURNING *",
      user_id
    );
    return deletedUser;
  } catch (e) {
    return e;
  }
};

const updateUser = async (user_id, user) => {
  try {
    const updatedUser = await db.one(
      "UPDATE users SET username=$1, email=$2, password=$3 WHERE user_id=$4 RETURNING *",
      [user.username, user.email, user.password, user_id]
    );
    return updatedUser;
  } catch (e) {
    return e;
  }
};
module.exports = { getAllUsers, getUser, createUser, deleteUser, updateUser };
