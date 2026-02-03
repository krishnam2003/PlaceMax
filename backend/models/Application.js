const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  status: { type: String, enum: ['Applied', 'Shortlisted', 'Interview Scheduled', 'Cleared', 'Failed', 'Placed'], default: 'Applied' },
  interviewRounds: [{ round: Number, date: Date, status: String }]
});

module.exports = mongoose.model('Application', applicationSchema);