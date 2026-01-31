import express from "express";
import Project from "../models/project.js";

const router = express.Router();


router.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch projects" });
    console.log(err);
  }
});

export default router;
