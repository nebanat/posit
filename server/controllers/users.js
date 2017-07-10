const User =require('../models').User
const md5 = require('md5');

module.exports = {
  create(req, res) {
    return User
      .create({
        username: req.body.username,
        email:req.body.email,
        password:md5(req.body.password)
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
};