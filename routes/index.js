var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/shows', function(req, res, next) {
  res.send("send shows back")
});

module.exports = router;
