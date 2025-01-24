import usersManager from "../data/fs/users.en.js";


const createUser = async (req, res) => {
  try {
    const data = req.body;
    if (!data.age || !data.name || !data.email || !data.password) {
      return res.status(400).json({
        error: "Missing necessary data (age, name, email, password)",
      });
    }
    const one = await usersManager.create(data);
    return res.status(201).json({ response: one });
  } catch (error) {
    const status = error.status || 500;
    const message = error.message || "Error creating the user";
    return res.status(status).json({ error: message });
  }
};

const readOneUser = async (req, res) => {
  const { uid } = req.params;
  try {
    const one = await usersManager.readOne(uid);
    if (one) {
      return res.status(200).json({ response: one });
    }
    return res.status(404).json({ error: "User not found" });
  } catch (error) {
    return res.status(500).json({ error: "Error getting the user" });
  }
};

const readAllUsers = async (req, res) => {
  try {
    const { role } = req.query;
    const all = await usersManager.readAll(role);
    if (all.length > 0) {
      return res.status(200).json({ response: all });
    }
  } catch (error) {
    return res.status(500).json({ error: "Error getting users" });
  }
};

const updateUser = async (req, res) => {
  const { uid } = req.params;
  const data = req.body;
  try {
    const updated = await usersManager.update(uid, data);
    if (!updated) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(200).json({ response: updated });
  } catch (error) {
    return res
      .status(error.status || 500)
      .json({ error: error.message || "Error updating the user" });
  }
};

const deleteUser = async (req, res) => {
  const { uid } = req.params;
  try {
    const deleted = await usersManager.delete(uid);
    if (!deleted) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.status(204).end();
  } catch (error) {
    return res
      .status(error.status || 500)
      .json({ error: error.message || "Error deleting the user" });
  }
};


export { createUser, readOneUser, readAllUsers, updateUser, deleteUser };