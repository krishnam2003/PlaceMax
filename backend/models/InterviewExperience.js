const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  company: String,
  position: String,
  experience: String,
  level: { type: String, enum: ['Easy', 'Medium', 'Hard'] },
  result: { type: String, enum: ['Successful', 'Unsuccessful'] }
});

module.exports = mongoose.model('InterviewExperience', experienceSchema);