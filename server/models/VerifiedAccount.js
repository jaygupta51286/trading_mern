const mongoose = require('mongoose');

const verifiedAccountSchema = new mongoose.Schema({
  mt5AccountNumber: {
    type: String,
    required: true,
    unique: true,
  },
  broker: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('VerifiedAccount', verifiedAccountSchema);
