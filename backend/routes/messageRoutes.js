import express from "express";
import Message from "../models/message.js";

const router = express.Router();

router.post("/messages", async (req, res) => {
  const { name, email, message } = req.body;
  await Message.create({ name, email, message });
  res.status(201).json({ message: "Message sent" });
});

export default router;
