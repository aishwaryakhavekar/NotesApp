const express = require('express');
const Note = require('../models/Note');
const router = express.Router();

// Get all notes (sorted newest first)
router.get('/', async (req, res) => {
  const notes = await Note.find().sort({ createdAt: -1 });
  res.json(notes);
});

// Create
router.post('/', async (req, res) => {
  const note = await Note.create(req.body);
  res.json(note);
});

// Update
router.put('/:id', async (req, res) => {
  const updated = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete
router.delete('/:id', async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
