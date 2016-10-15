var express = require('express');
var router = express.Router();
var Post = require('../models/post');

/* GET post page. */
router.get('/', function(req, res, next) {
  //res.render('posts/index', { title: 'Express' });
  //res.send('respond with a post');
  Post.find().exec(function(err, posts){
  	res.render('posts/index',{posts : posts});
  });
});

router.get('/create', function(req, res, next) {
  res.render('posts/create', { title: 'Express' });
  //res.send('respond with a post');
});

router.post('/store', function(req, res, next){
	var title = req.body.title;
	var description = req.body.description;
	var post = new Post(req.body).save();
	// post.title = title;
	// post.description = description;
	// post.save();
	// res.send('ok');
	res.redirect('/posts');
});

router.get('/delete/:id', function(req, res, next){
	console.log(req.params.id);
	Post.remove({ _id: req.params.id }, function (err) {
	  if (err) 
	  	return handleError(err);

	  console.log('remove');
	  // removed!
	});
	res.redirect('/posts');
});

module.exports = router;
