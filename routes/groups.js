const express = require('express');
const router = express.Router();
//const md5 = require('md5');

const groupController= require('../server/controllers').groups


/* GET users listing. */
router.post('/',groupController.create)

//router.post('/signup',userController.create)

module.exports = router;
