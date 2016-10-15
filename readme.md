# Using Express Generator

Create new NodeJs application with Express Generator together with Handlebars wrapper and `.gitignore` file.

```
express --hbs --git appname
```

Go into application directory and install package dependencies
```
cd appname && npm install
```

Serve the application

```
nodemon
```

## How to create a new page / route?

Create a new route in `routes` directory called `posts.js` and copy paste and save the following code snippet.

```javascript
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('posts/index', { title: 'Express' });
});

module.exports = router;
```

In `app.js`, include the `posts.js`:

```javascript
// include the new route
var posts = require('./routes/posts');

// set route group
app.use('/posts', posts);
```

## How to export variable from  module?

```javascript
module.export.varName = varValue;
```

In `app.js`, you can use it like:

```javascript
var varName = posts.varName;
```

## How to get value from parameters?

```javascript
let user_id = req.params.user_id;
```

## How to get value from query string?

```javascript
var user_id = req.query.user_id;
```

## How to get value from body(form submission)?

```javascript
var user_id = req.body.user_id;
```

## How to disable logger?

Comment out the following lines:

```javascript
var logger = require('morgan');
```

```javascript
app.use(logger('dev'));
```

## Using Mongoose 

Install Mongoose

```
npm install mongoose --save
```

Include in `app.js` and connect to the database:

```javascript
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
```

### How to create a model?

```javascript
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema  = new Schema({
	title: String,
	description: String
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;
```

### How to store a new record?

```javascript
var post = new Post(req.body).save();
post.title = title;
post.description = description;
post.save();
```

OR to be short

```javascript
var post = new Post(req.body).save();
```

### How to remove a record?

```javascript
Post.remove({ _id : id }, function(err){
	if (err) 
		return handleError(err);

	console.log('Post removed');
});
```