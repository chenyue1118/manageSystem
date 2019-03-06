// module dependencies
const express = require('express');
const tokenRouter = require('./token');

const router = new express.Router();

router.use('/token', tokenRouter);

// module exports
module.exports = router;
