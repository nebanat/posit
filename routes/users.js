const express = require('express');
const router = express.Router();
const md5 = require('md5');
//const userController= require('../server/controllers').users


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//router.get('/signup',userController.create)

module.exports = router;
