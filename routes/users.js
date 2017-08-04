/*eslint-disable */
import authenticate from '../middleware/authenticate.js';

const express = require('express');

const router = express.Router();

const userController = require('../server/controllers').users;

const jwt = require('jsonwebtoken');



/* GET users listing. */


router.post('/signup', userController.create);

router.post('/signin', userController.signIn);

router.get('/find/:id', userController.userExist);



router.use(authenticate);

router.get('/signout', (req, res) => {
  req.session.destroy(() => {
    /* eslint-disable no-console*/
    console.log('Logged Out');
  });
  res.end();
});

router.get('/all',userController.list);





module.exports = router;
