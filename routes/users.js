/*eslint-disable */
import authenticate from '../middleware/authenticate.js';

const express = require('express');

const router = express.Router();

const userController = require('../server/controllers').users;

const jwt = require('jsonwebtoken');



/* Authentication routes*/
router.post('/signup', userController.signUp);

router.post('/signin', userController.signIn);

router.get('/tester',userController.getTest);






router.use(authenticate);//authentication middleware//

//user routes using auth middleware//
router.get('/all',userController.list);

router.get('/groups', userController.getAuthUserGroups);

router.get('/:id/groups',userController.getUserGroups);

router.get('/messages',userController.getAuthUserMessages)

router.get('/:id/messages',userController.getUserMessages)


router.post('/search',userController.searchUser);





module.exports = router;
