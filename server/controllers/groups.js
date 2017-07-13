import models from '../models';
// const User = require('../models').User;
// const Message = require('../models').Message;
// const UsersGroups = require('../models').UsersGroups;
// const md5 = require('md5');

export default {
  create(req, res) {
    return models.Group
      .create({
        name: req.body.name,
        description: req.body.description,
      })
      .then((group) => {
        // console.log(group.id)
        models.UsersGroups.create({
          userId: req.session.user.id,
          groupId: group.id
        });
        res.status(201).send(group);
      })
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return models.Group
      .all({
        include: [{ all: true }]
      })
      .then(groups => res.status(200).send(groups))
      .catch(error => res.status(400).send(error));
  },
  addUserToGroup(req, res) {
    return models.Group
      .findById(req.params.id)
      .then((group) => {
        if (!group) {
          return res.status(404).send({
            message: 'Group not found'
          });
        }
        return res.send(group);
      })
      .then(models.UsersGroups
        .create({
          userId: req.session.user.id,
          groupId: req.params.id,

        }))
      .then(res.send('User successfully added to the group'))
      .catch(error => res.status(400).send(error));
  },
  addMessageToGroup(req, res) {
    return models.Group
      .findById(req.params.id)
      .then((group) => {
        if (!group) {
          return res.status(404).send({
            message: 'Group not found'
          });
        }
        models.Message.create({
          content: req.body.content,
          priority: req.body.priority,
          userId: req.session.user.id,
          groupId: group.id
        });

        return res.send('Message sent');
      })
      .catch(error => res.status(400).send(error));
  },
  getGroupMessages(req, res) {
    return models.Group
      .findOne({ where: { id: req.params.id },
        include: [{ model: models.Message, as: 'messages' }] })
      .then(group => res.status(200).send(group))
      .catch(error => res.status(400).send(error));
  }


};

