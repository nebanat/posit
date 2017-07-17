import models from '../models';

// const userValidation = require('../validations').users;
// const Group = require('../models').Group;
/* eslint-disable import/no-extraneous-dependencies*/
/*eslint-disable*/
const md5 = require('md5');
// const bcrypt = require('bcrypt');

module.exports = {
  create(req, res) {
    /** validates username, email,phone and password */
    if (!req.body.username || req.body.username == null) {
      return res.status(400).send({
        message: 'Please enter a valid username'
      });
    } else if (!req.body.email || req.body.email == null) {
      return res.status(400).send({
        message: 'Please enter a valid email'
      });
    } else if (!req.body.phone || req.body.phone == null || req.body.phone.length !== 11) {
      return res.status(400).send({
        message: 'Please enter a valid phone number'
      });
    } else if (!req.body.password || req.body.password.length < 8) {
      return res.status(400).send({
        message: 'Password is required and must be at least 8 characters'
      });
    }

    return models.User
      .create({
        username: req.body.username,
        email: req.body.email,
        phone: req.body.phone,
        password: md5(req.body.password)
      })
      .then(user => res.status(201).send({
        message: 'Signup successful',
        username: user.username,
        email: user.email,
        phone: user.phone
      }))
      .catch(error => res.status(400).send({
        message: error.message
      }));
  },
  /* This method signs up*/
  signIn(req, res) {
    if (!req.body.username || req.body.username == null || !req.body.password || req.body.password == null) {
      return res.status(400).send({
        message: 'All fields are required'
      });
    }
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
        return res.status(200).send({
          message: `Welcome ${user.username}`,

        });
      })
      .catch(error => res.send(400).send(error));
  },
  list(req, res) {
    /** Extraneous method that returns users with all relationship */
    return models.User
      .all({
        include: [{ all: true }]
      })
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send({
        message: error.message
      }));
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
      .catch(error => res.send(400).send(error));
  }

};
