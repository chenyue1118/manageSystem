// module dependencies
const express = require('express');

const router = new express.Router();

router.route('/')
    /** POST /api/token  */
    .post((req, res) => {
      res.send({'status': 'token-POST'});
    })
    /** GET /api/token  */
    .get((req, res) => {
      res.send({'status': 'token-GET'});
    });

// module exports
module.exports = router;
