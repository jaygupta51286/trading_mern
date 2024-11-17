const express = require('express');
const router = express.Router();

router.post('/participants', (req, res) => {
  const { name, email, accountNumber, mt5Number, broker } = req.body;
  // Logic to store participant's registration data (in a database or file)
  res.status(201).send({ message: 'Registration successful' });
});

module.exports = router;
