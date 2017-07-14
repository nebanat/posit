import express from 'express';

const message = express.Router();
// const Message = require('../server/models').Message;
// const UsersGroups = require('../server/models').UsersGroups;
// const md5 = require('md5');

const messageController = require('../server/controllers').messages;


message.use((req, res, next) => {
  if (!req.session.user) {
    return res.status(401).send();
  }

  // return res.status(200).send('Welcome to super secret key')
  next();
});

/* GET users listing. */
message.post('/', messageController.create);
// group.get('/all',groupController.list)
// group.post('/:id/user',groupController.addUserToGroup)


module.exports = message;
