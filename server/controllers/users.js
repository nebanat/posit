import models from '../models';
// const Group = require('../models').Group;
/* eslint-disable import/no-extraneous-dependencies*/
const md5 = require('md5');
// const bcrypt = require('bcrypt');

module.exports = {
  create(req, res) {
    return models.User
      .create({
        username: req.body.username,
        email: req.body.email,
        password: md5(req.body.password)
      })
      .then(user => res.status(201).send(user.username))
      .catch(error => res.status(400).send(error.message));
  },
  /* This method signs up*/
  signIn(req, res) {
    return models.User
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
        return res.status(200).send(user.username);
      })
      .catch(error => res.send(400).send(error.message));
  },
  list(req, res) {
    /** Extraneous method that returns users with all relationship */
    return models.User
      .all({
        include: [{ all: true }]
      })
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error));
  },
  rUser(req, res) {
    res.send('I can see the user controller');
  },

  userExist(req, res) {
    return models.User
      .findById(req.params.id)
      .then((user) => {
        /* Checks to see if the user exist*/
        if (!user) {
          return res.send(false);
        }
        /* creates a session for the user*/
        // req.session.user = user;
        return res.send(true);
      })
      .catch(error => res.send(400).send(error.message));
  }

};
