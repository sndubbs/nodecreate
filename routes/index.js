var request = require('request')
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile('index.html', { root: 'public' });
});
router.get('/cat', function(req, res) {
  console.log("In cat");
});
var cats = "https://aws.random.cat/meow";
router.get('/cats', function(req,res) {
  console.log("In cats");
  request(cats).pipe(res);
});

module.exports = router;
