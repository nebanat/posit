import decode from 'jwt-decode';
import jwt from 'jsonwebtoken';
import md5 from 'md5';
import 'url-search-params-polyfill';
import models from '../models';
import userHelper from '../helpers/user';
import { transporter } from '../mail/nodemailer';

const randomstring = require('randomstring');


export default {
  /**
   * 
   * @param {req} req 
   * @param {res} res
   * @return {user} user model instance 
   */
  signUp(req, res) {
    // validates username, email,phone and password
    if (!req.body.username) {
      return res.status(400).send({
        message: 'username is required'
      });
    } else if (!req.body.email) {
      return res.status(400).send({
        message: 'email is required'
      });
    } else if (!req.body.password || req.body.password.length < 8) {
      return res.status(400).send({
        message: 'Password is required and must be at least 8 characters'
      });
    }
    // checks if username already exist
    models.User
      .findOne({ where: { username: req.body.username } })
      .then((user) => {
        if (user) {
          return res.status(400).send({
            message: 'Username is taken '
          });
        }
      });

    // checks if email is already taken
    models.User
      .findOne({ where: { email: req.body.email } })
      .then((user) => {
        if (user) {
          return res.status(400).send({
            message: 'Email address is taken'
          });
        }
      });

    // creates the user
    return models.User
      .create({
        username: req.body.username,
        email: req.body.email,
        password: md5(req.body.password)
      })
      .then(user => res.status(201).send({
        message: 'Signup successful',
        username: user.username,
        email: user.email,
      }))
      .catch(error => res.status(400).send({
        message: error
      }));
  },


  /**
   * 
   * @param {req} req 
   * @param {res} res
   * @return {object} user,message,token
   */
  signIn(req, res) {
    // validates user entries
    if (!req.body.username) {
      return res.status(400).send({
        message: 'Please enter username'
      });
    } else if (!req.body.password) {
      return res.status(400).send({
        message: 'Please enter password'
      });
    }

    return models.User
      .findOne({ where: {
        username: req.body.username, password: md5(req.body.password)
      },
      attributes: {
        exclude: ['password,resetPassToken,expirePassToken']
      }
      })
      .then((user) => {
        // Checks to see if the user exist//
        if (!user) {
          return res.status(402).send({
            message: 'Invalid username or password'
          });
        }
        const token = jwt.sign({ user }, process.env.SECRET, {
          expiresIn: '24h'
        });

        return res.status(200).send({
          message: `Welcome ${user.username}`,
          token,
          user
        });
      })
      .catch(error => res.status(400).send(error));
  },
  /**
   * 
   * @param {req} req 
   * @param {res} res
   * @return {users} all user model instances 
   */
  list(req, res) {
    // Extraneous method that returns users with all relationship //
    return models.User
      .all({ attributes: ['username', 'email'] })
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send({
        message: error.message
      }));
  },


  /**
   * 
   * @param {req} req 
   * @param {res} res
   * @return {groups} authenticated user groups 
   */
  getAuthUserGroups(req, res) {
    const id = req.body.id || req.query.id || req.headers['id-token'];

    return models.User
      .findOne({ where: {
        id
      },
      })
      .then((user) => {
        /* Checks to see if the user exist */
        if (!user) {
          return res.status(404).send({
            message: 'User does not exist'
          });
        }

        user.getGroups().then(userGroups => res.status(200).send(userGroups));
      })
      .catch(error => res.status(402).send(error));
  },
  /**
   * 
   * @param {req} req 
   * @param {res} res 
   * @return {groups} user groups
   */
  getUserGroups(req, res) {
    // this will return a user group
    const userId = req.params.id;

    return models.User
      .findById(userId)
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: 'User does not exist'
          });
        }

        user.getGroups().then(userGroups => res.status(200).send(userGroups));
      });
  },
  /**
  * 
  * @param {req} req 
  * @param {res} res 
    @return {messages} authenticated user messages
  */

  getAuthUserMessages(req, res) {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    // decodes token//
    const access = decode(token);
    const userId = access.user.id;

    return models.User
      .findById(userId)
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: 'User does not exist'
          });
        }

        user.getMessages().then(userMessages => res.status(200).send(userMessages));
      });
  },

  /**
   * 
   * @param {req} req 
   * @param {res} res
   * @return {messages} user messages 
   */
  getUserMessages(req, res) {
    const userId = req.params.id;

    return models.User
      .findById(userId)
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: 'User does not exist'
          });
        }

        user.getMessages().then(userMessages => res.status(200).send(userMessages));
      });
  },

  // searches for a user *don't forget to add pagination*// 
  searchUser(req, res) {
    if (req.body.query) {
      return models.User.findAll({ where: {
        username: {
          $like: `%${req.body.query}%`,
        }
      },
      attributes: ['id', 'username', 'email'],

      })
        .then((users) => {
          if (users.length) {
            return res.status(200).send(users);
          }

          return res.status(404).send({
            message: 'No users found'
          });
        })
        .catch(error => res.status(402).send(error));
    }
    return res.status(402).send({
      message: 'please enter a search text'
    });
  },

  /**
   * 
   * @param {req} req 
   * @param {res} res
   * @return {user} user 
   */
  searchUsersNotInAGroup(req, res) {
    const groupId = req.body.groupId;
    const query = req.body.query;

    models.Group
      .findById(groupId)
      .then((group) => {
        if (!group) {
          return res.status(400).send({
            message: 'Group was not found'
          });
        }

        group.getUsers().then((users) => {
          const members = users.map(user => user.id);

          models.User.findAll({ where: {
            username: {
              $like: `%${query}%`,
            },
            $not: [
              { id: members }
            ]
          },
          attributes: {
            exclude: ['password']
          }
          })
            // nusers represent users not in a group
            .then((nUsers) => {
              if (!nUsers.length) {
                return res.status(204).send({
                  message: 'No user found'
                });
              }
              return res.status(200).send(nUsers);
            });
        });
      });
  },
  /**
   * 
   * @param {req} req 
   * @param {res} res
   * @return {email} email 
   */
  sendResetPasswordEmail(req, res) {
    const email = req.body.email;

    userHelper.userEmailExist(email)
      .then((user) => {
        if (!user) {
          return res.status(400).send({
            message: 'User does not exist in our records'
          });
        }

        const token = randomstring.generate();
        const expiryDate = Date.now() + 360000;

        // updates the user details with tokena and expiry date
        user.update({
          resetPassToken: token,
          expirePassToken: expiryDate
        }).then((updatedUser) => {
          const mailOptions = {
            from: '"Post It" <noreply@postit.com',
            to: updatedUser.email,
            subject: 'PostIt test',
            text: `Hello Aaron! 
                The link to reset your password is below
                http://localhost:8080/reset/password/${token}`
          };

          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              return res.send({
                message: 'Unable to send email something went wrong'
              });
            }

            return res.status(200).send({
              message: 'Reset password link has been sent to your account'
            });
          });
        });
      });
  },
  /**
   * 
   * @param {req} req 
   * @param {res} res
   * @return {email} password reset email 
   */
  resetPassword(req, res) {
    const resetToken = req.body.resetToken;
    const expiryDate = Date.now() - req.body.expiryDate;
    const password = req.body.password;

    // checks if token has expired or no token was passed
    if (expiryDate > 360000 || !resetToken) {
      return res.status(400).send({
        message: 'Invalid Token'
      });
    }

    // checks if there is user with such token// 
    models.User.findOne({
      where: {
        resetPassToken: resetToken
      }
    })
      .then((user) => {
        if (!user) {
          return res.status(200).send({
            message: 'User does not exist'
          });
        }
        user.update({
          password: md5(password),
          resetPassToken: '',
          expirePassToken: ''
        }).then(() => res.status(201).send({
          message: 'Password reset successful'
        }));
      });
  },

  getTest(req, res) {
    // use for test
    return res.send({
      message: 'getTested'
    });
  },


};
