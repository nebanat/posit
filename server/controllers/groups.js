
import models from '../models';


module.exports = {
  create(req, res) {
    /** validates user input */

    return models.Group
      .create({
        name: req.body.name,
        description: req.body.description,
      })
      .then((group) => {
        // console.log(group.id)
        models.UsersGroups.create({
          userId: req.decoded.id,
          groupId: group.id
        });
        res.status(201).send(group);
      })
      .catch(error => res.status(402).send(error.name));
  },
  list(req, res) {
    return models.Group
      .all({
        include: [{ all: true }]
      })
      .then(groups => res.status(200).send(groups))
      .catch(error => res.status(402).send(error.name));
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
        if (!models.User.findById(req.body.userId)) {
          return res.status(404).send({
            message: 'User not found'
          });
        }

        models.UsersGroups
          .create({
            userId: req.body.userId,
            groupId: req.params.id,

          });

        res.send('User successfully added to the group');

        // return res.send(group);
      })
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

