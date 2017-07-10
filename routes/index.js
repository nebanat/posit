const express = require('express');
const router = express.Router();
const md5 = require('md5');

/* GET welcome page. */
router.get('/', (req, res, next)=> {
  res.render('index', { title: 'PostIt Messaging App',login:'login' });
});

/* GET login page. */
router.get('/login', (req, res, next)=> {
  res.render('login', { title: 'PostIt Messaging App',login:'login' });
});


/* GET register page. */
router.get('/register', (req, res, next)=> {
  res.render('register', { register:'Register' });
});

/* GET register page. */
router.get('/password/reset', (req, res, next)=> {
  res.render('email_reset', { reset:'Reset Password' });
});

/*route to create new group*/
router.get('/new/group', (req, res, next)=> {
  res.render('new_group', { group:'Create New Group' });
});

router.get('/groups', (req, res, next)=> {
  res.render('message_board');
});

router.get('/new/message', (req, res, next)=> {
  res.render('new_message');
});

router.get('/home', (req, res, next)=> {
  res.render('index');
});



/*router.get('/api/group/:id/messages', function(req, res, next) {
  res.send(req.params);
});*/

module.exports = router;
