var express = require('express');
var router = express.Router();
var config = require('../config/default.json');

/* GET hello world page. */
router.get('/', function(req, res, next) {
  console.log(config);
  if (req.query['hub.mode'] === 'subscribe' &&
      req.query['hub.verify_token'] === config) {
    console.log("Validating webhook");
    res.status(200).send(req.query['hub.challenge']);
  } else {
    console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);
  }
});

module.exports = router;
