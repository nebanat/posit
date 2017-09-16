import authenticate from '../middleware/authenticate';

const express = require('express');

const router = express.Router();

const userController = require('../server/controllers').users;

// const jwt = require('jsonwebtoken');


/* Authentication routes */
router.post('/signup', userController.signUp);

router.post('/signin', userController.signIn);

router.get('/tester', userController.getTest);


router.get('/all', userController.list);

router.post('/get/search', userController.searchUsersNotInAGroup);

router.post('/password/reset', userController.sendResetPasswordEmail);

router.post('/password_reset', userController.resetPassword);


router.use(authenticate);// authentication middleware//

// user routes using auth middleware//

router.get('/groups', userController.getAuthUserGroups);

router.get('/:id/groups', userController.getUserGroups);

router.get('/messages', userController.getAuthUserMessages);

router.get('/:id/messages', userController.getUserMessages);

router.post('/search', userController.searchUser);


// router.post('/get/search', userController.searchUsersNotInAGroup);


module.exports = router;
