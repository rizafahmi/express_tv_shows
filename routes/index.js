const express = require('express');
const router = express.Router();

const queries = require('../db/queries.js')

/* GET home page. */
router.get('/shows', function(req, res, next) {
  queries.getAll()
    .then((shows) => {
      res.status(200).json(shows)
    })
    .catch((error) => {
      next(error)
    })
});

module.exports = router;
