import express from 'express';

const router = express.Router();


/* GET welcome page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'PostIt Messaging App', login: 'login' });
});

router.get('/example', (req, res) => {
  res.status(200).send();
});

/* GET login page. */
router.get('/login', (req, res) => {
  res.render('login', { title: 'PostIt Messaging App', login: 'login' });
});


/* GET register page. */
router.get('/register', (req, res) => {
  res.render('register', { register: 'Register' });
});

/* GET register page. */
router.get('/password/reset', (req, res) => {
  res.render('email_reset', { reset: 'Reset Password' });
});

/* route to create new group*/
router.get('/new/group', (req, res) => {
  res.render('new_group', { group: 'Create New Group' });
});

router.get('/groups', (req, res) => {
  res.render('message_board');
});

router.get('/new/message', (req, res) => {
  res.render('new_message');
});

router.get('/home', (req, res) => {
  res.render('index');
});


/* router.get('/api/group/:id/messages', function(req, res, next) {
  res.send(req.params);
});*/

module.exports = router;
