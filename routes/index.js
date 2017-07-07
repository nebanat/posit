const express = require('express');
const router = express.Router();

/* GET welcome page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PostIt Messaging App',login:'login' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'PostIt Messaging App',login:'login' });
});


/* GET register page. */
router.get('/register', function(req, res, next) {
  res.render('register', { register:'Register' });
});

/* GET register page. */
router.get('/password/reset', function(req, res, next) {
  res.render('email_reset', { reset:'Reset Password' });
});

/*route to create new group*/
router.get('/new/group', function(req, res, next) {
  res.render('new_group', { group:'Create New Group' });
});

router.get('/api/group/id', function(req, res, next) {
  res.render('message_board');
});

router.get('/new/message', function(req, res, next) {
  res.render('new_message');
});

router.get('/home', function(req, res, next) {
  res.render('index');
});


module.exports = router;
