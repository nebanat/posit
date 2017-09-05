/*eslint-disable */
import authenticate from '../middleware/authenticate.js';

const express = require('express');

const router = express.Router();

const userController = require('../server/controllers').users;

const jwt = require('jsonwebtoken');



/* GET users listing. */


router.post('/signup', userController.create);

router.post('/signin', userController.signIn);





router.use(authenticate);

router.get('/all',userController.list);

router.get('/groups', userController.userExist);

router.get('/get/groups',userController.getGroups)





module.exports = router;
