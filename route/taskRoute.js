import { Router } from "express";
import { createTask, getTask, updateTask, deleteTask } from "../controller/taskController.js";

const router = Router();

router.post("/task", createTask);
router.get("/task", getTask);
router.put("/task/:id", updateTask);
router.delete("/task/:id", deleteTask);

export default router;