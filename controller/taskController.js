import TaskModel from "../models/TaskModel.js";
import jwt from "jsonwebtoken";

// 🔑 Helper function: extract token from header
const getTokenFromHeader = (req) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    return authHeader.split(" ")[1];
  }
  return null;
};

// ➡️ Create Task
export const createTask = async (req, res) => {
  try {
    const token = getTokenFromHeader(req);
    if (!token) return res.status(401).send({ success: false, message: "Token missing" });

    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).send({ success: false, message: "Fill all fields" });
    }

    const task = new TaskModel({ title, description, user: decoded.id });
    await task.save();

    res.status(201).send({ success: true, message: "Task Created", task });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

// ➡️ Get all tasks
export const getTask = async (req, res) => {
  try {
    const token = getTokenFromHeader(req);
    if (!token) return res.status(401).send({ success: false, message: "Token missing" });

    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

    const tasks = await TaskModel.find({ user: decoded.id });
    res.send({ success: true, tasks });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

// ➡️ Update Task
export const updateTask = async (req, res) => {
  try {
    const token = getTokenFromHeader(req);
    if (!token) return res.status(401).send({ success: false, message: "Token missing" });

    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

    const updatedTask = await TaskModel.findOneAndUpdate(
      { _id: req.params.id, user: decoded.id },
      req.body,
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).send({ success: false, message: "Task not found" });
    }

    res.send({ success: true, message: "Task Updated", updatedTask });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};

// ➡️ Delete Task
export const deleteTask = async (req, res) => {
  try {
    const token = getTokenFromHeader(req);
    if (!token) return res.status(401).send({ success: false, message: "Token missing" });

    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

    const deletedTask = await TaskModel.findOneAndDelete({
      _id: req.params.id,
      user: decoded.id,
    });

    if (!deletedTask) {
      return res.status(404).send({ success: false, message: "Task not found" });
    }

    res.send({ success: true, message: "Task Deleted" });
  } catch (error) {
    res.status(500).send({ success: false, message: error.message });
  }
};
