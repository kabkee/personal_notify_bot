var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send(`Current Time :: ${new Date()}`)
});

module.exports = router;