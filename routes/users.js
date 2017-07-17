const express = require('express');

const router = express.Router();

const userController = require('../server/controllers').users;


/* GET users listing. */
/** router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});**/

router.post('/signup', userController.create);

router.post('/signin', userController.signIn);

router.get('/find/:id', userController.userExist);

// router.get('/hash',userController.hashP)

router.use((req, res, next) => {
  if (!req.session.user) {
    return res.status(401).send({
      message: 'Unauthorized you must be logged in'
    });
  }

  // return res.status(200).send('Welcome to super secret key')
  next();
});

router.get('/signout', (req, res) => {
  req.session.destroy(() => {
    /* eslint-disable no-console*/
    console.log('Logged Out');
  });
  res.end();
});

router.get('/all', userController.list);


/** router.get('/getuser', (res, req) => {

  // console.log(res.session.user.id)
  // req.end()
});**/

module.exports = router;
