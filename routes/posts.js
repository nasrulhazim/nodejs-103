var express = require('express');
var router = express.Router();

/* GET post page. */
router.get('/', function(req, res, next) {
  res.render('posts/index', { title: 'Express' });
  //res.send('respond with a post');
});

module.exports = router;
