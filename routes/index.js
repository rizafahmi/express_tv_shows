const express = require('express');
const router = express.Router();

const queries = require('../db/queries.js')

/* GET home page. */
router.get('/shows', (req, res, next) => {
  queries.getAll()
    .then((shows) => {
      res.status(200).json(shows)
    })
    .catch((error) => {
      next(error)
    })
});


// *** GET Single show *** //
router.get('/shows/:id', (req, res, next) => {
  queries.getSingle(req.params.id)
    .then((show) => {
      res.status(200).json(show)
    })
    .catch((err) => {
      next(err)
    })
})

module.exports = router;
