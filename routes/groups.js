const express = require('express');

const group = express.Router();
// const Group = require('../server/models').Group;
// const UsersGroups = require('../server/models').UsersGroups;
// const md5 = require('md5');

const groupController = require('../server/controllers').groups;


group.use((req, res, next) => {
  if (!req.session.user) {
    return res.status(401).send();
  }

  // return res.status(200).send('Welcome to super secret key')
  next();
});

/* GET users listing. */
group.post('/', groupController.create);
group.get('/all', groupController.list);
group.post('/:id/user', groupController.addUserToGroup);
group.post('/:id/message', groupController.addMessageToGroup);
group.get('/:id/message', groupController.getGroupMessages);


module.exports = group;
