const User = require('../models').User;
// const Group = require('../models').Group;
/* eslint-disable import/no-extraneous-dependencies*/
const md5 = require('md5');
// const bcrypt = require('bcrypt');

module.exports = {
  create(req, res) {
    return User
      .create({
        username: req.body.username,
        email: req.body.email,
        password: md5(req.body.password)
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
  /* This method signs up*/
  signIn(req, res) {
    return User
      .findOne({ where: {
        username: req.body.username, password: md5(req.body.password)
      }
      })
      .then((user) => {
        /* Checks to see if the user exist*/
        if (!user) {
          return res.status(404).send({
            message: 'Invalid Auth details'
          });
        }
        /* creates a session for the user*/
        req.session.user = user;
        return res.status(200).send(user);
      })
      .catch(error => res.send(400).send(error));
  },
  list(req, res) {
    /** Extraneous method that returns users with all relationship */
    return User
      .all({
        include: [{ all: true }]
      })
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error));
  }

};
