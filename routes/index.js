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


// *** Add a show *** //
router.post('/shows/', (req, res, next) => {
  queries.add(req.body)
    .then((showId) => {
      return queries.getSingle(showId)
    })
  .then((show) => {
    res.status(200).json(show)
  })
  .catch((error) => {
    next(error)
  })
})

// *** Update a show *** //
router.put('/shows/:id', (req, res, next) => {
  if (req.body.hasOwnProperty('id')) {
    return res.status(422).json({
      error: 'You cannot update the id field'
    })
  }
  queries.update(req.params.id, req.body)
    .then(() => {
      return queries.getSingle(req.params.id)
    })
  .then((show) => {
    res.status(200).json(show)
  })
  .catch((err) => {
    next(err)
  })
})

module.exports = router;
