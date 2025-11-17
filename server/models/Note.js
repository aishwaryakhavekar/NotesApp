const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
  title: { type: String, default: 'Untitled' },
  content: { type: String, default: '' },
  pinned: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Note', NoteSchema);
