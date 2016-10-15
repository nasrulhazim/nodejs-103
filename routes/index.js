var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('auth/login');
});

router.post('/login', function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  
  console.log(username, password);

  if(username === '' || password === '') {
  	res.redirect('/');
  } else {
  	res.send('yeah!');
  }
});

module.exports = router;
