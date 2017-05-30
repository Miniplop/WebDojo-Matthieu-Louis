var express = require('express');
var router = express.Router();
var config = require('../config/default.json');
var chatService = require('../server/chatService')


/* GET hello world page. */
router.get('/', function(req, res, next) {
  console.log(config);
  if (chatService.authenticate(req)) {
    res.status(200).send("hello");
  } else {
    console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);
  }
});

router.post('/', function(req, res, next) {
  res.status(200).send("hello");
});

module.exports = router;
