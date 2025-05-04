const express = require('express');
const validateToken = require('../authMiddleware');

const router = express.Router();

// Protected route
router.get('/', validateToken, (req, res) => {
  const user = req.user;
  res.json({ message: 'You are authenticated!', user });
});

module.exports = router;