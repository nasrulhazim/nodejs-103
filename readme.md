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