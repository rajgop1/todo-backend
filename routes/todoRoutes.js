const express = require("express");
const Todo = require("../models/Todo");

const router = express.Router();

// Create a new todo
router.post("/todos", async (req, res) => {
    try {
      console.log("Request body:", req.body); // 👈 Log to check received data
  
      const { title, completed } = req.body;
      if (!title) {
        return res.status(400).json({ message: "Title is required" });
      }
  
      const newTodo = new Todo({ title, completed });
      await newTodo.save();
      
      res.status(201).json(newTodo);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

// Get all to-dos
router.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a to-do
router.put("/todos/:id", async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a to-do
router.delete("/todos/:id", async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "To-Do deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
