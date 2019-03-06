// module dependencies
const express = require('express');

const router = new express.Router();

router.use('/login', (req, res) => {
  res.render('login');
});

// module exports
module.exports = router;
