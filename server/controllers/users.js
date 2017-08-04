/*eslint-disable*/
import models from '../models';


const jwt = require('jsonwebtoken');
/* eslint-disable import/no-extraneous-dependencies*/
const md5 = require('md5');
// const bcrypt = require('bcrypt');

module.exports = {
  create(req, res) {
    /** validates username, email,phone and password */
    if (!req.body.username) {
      return res.status(402).send({
        message: 'Please enter a valid username'
      });
    } 
    else if (!req.body.email) {
      return res.status(402).send({
        message: 'Please enter a valid email'
      });
    }
     else if (!req.body.password || req.body.password.length < 8) {
      return res.status(402).send({
        message: 'Password is required and must be at least 8 characters'
      });
    }
    //creates the user//
    return models.User
      .create({
        username: req.body.username,
        email: req.body.email,
        password: md5(req.body.password)
      })
      .then(user => res.status(200).send({
        message: 'Signup successful',
        username: user.username,
        email: user.email,
       }))
      .catch(error => res.status(402).send({
        message: error.message
      }));
  },
  /* user signIn method*/
  signIn(req, res) {
    if (!req.body.username || !req.body.password) {
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
            message: 'Invalid username or password'
          });
        }
        const token=jwt.sign({user},process.env.SECRET,{
          expiresIn:'24h'
        })
        
         return res.status(200).send({
            message: `Welcome ${user.username}`,
            token:token
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
