const express = require('express');
const Participant = require('../models/Participant');
const VerifiedAccount = require('../models/VerifiedAccount');
const FinalParticipant = require('../models/FinalParticipant');

const router = express.Router();

// Register a new participant
router.post('/register', async (req, res) => {
  try {
    const { name, email, phoneNumber, broker } = req.body;

    const newParticipant = new Participant({
      name,
      email,
      phoneNumber,
      broker,
    });

    await newParticipant.save();
    res.status(201).json({ message: "Participant registered successfully" });
  } catch (error) {
    console.error('Error registering participant:', error);
    res.status(500).json({ message: "Error registering participant", error: error.message });
  }
});

// Add MT5 account number (admin)
router.post('/add-account', async (req, res) => {
  try {
    const { mt5AccountNumber, broker } = req.body;
    const newAccount = new VerifiedAccount({ mt5AccountNumber, broker });

    await newAccount.save();
    res.status(201).json({ message: "MT5 account number and broker added successfully" });
  } catch (error) {
    console.error('Error adding MT5 account number and broker:', error);
    res.status(500).json({ message: "Error adding MT5 account number and broker", error: error.message });
  }
});

// Verify and register final participant
router.post('/verify-account', async (req, res) => {
  try {
    const { name, email, phoneNumber, mt5AccountNumber, broker } = req.body;
    const account = await VerifiedAccount.findOne({ mt5AccountNumber, broker });

    if (account) {
      const newFinalParticipant = new FinalParticipant({
        name,
        email,
        phoneNumber,
        broker,
        mt5AccountNumber,
      });

      await newFinalParticipant.save();
      res.status(200).json({ verified: true, message: "Final participant registered successfully" });
    } else {
      res.status(404).json({ verified: false, message: "MT5 account number or broker not found" });
    }
  } catch (error) {
    console.error('Error verifying account:', error);
    res.status(500).json({ message: "Error verifying account", error: error.message });
  }
});

module.exports = router;
