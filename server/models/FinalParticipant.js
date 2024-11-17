const mongoose = require('mongoose');

const finalParticipantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  broker: {
    type: String,
    required: true,
  },
  mt5AccountNumber: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('FinalParticipant', finalParticipantSchema);
