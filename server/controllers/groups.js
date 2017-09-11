import decode from 'jwt-decode';
import models from '../models';
import hello from '../hello';


export default {
  // creates new group
  create(req, res) {
    /** validates user input */
    if (!req.body.name) {
      return res.status(402).send({
        message: 'Enter group name'
      });
    }
    /** decodes token */
    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    const access = decode(token);
    /** creates group */
    return models.Group
      .create({
        name: req.body.name,
        description: req.body.description,
      })
      .then((group) => {
        /** adds group creator to group */
        group.addUser(access.user.id);

        res.status(201).send(group);
      })
      .catch(error => res.status(402).send(error.name));
  },

  // lists all groups 
  list(req, res) {
    return models.Group
      .all({
        include: [{ all: true }]
      })
      .then(groups => res.status(200).send(groups))
      .catch(error => res.status(402).send(error));
  },


  // adds a user to group
  addUserToGroup(req, res) {
    const groupId = req.params.id;
    const userId = req.body.userId;
    // checks if a group exist//
    return models.Group
      .findById(groupId)
      .then((group) => {
        // checks if 
        if (!group) {
          return res.status(404).send({
            message: 'Group not found'
          });
        }
        // checks if a user exist// 
        return models.User
          .findById(userId)
          .then((user) => {
            if (!user) {
              return res.status(404).send({
                message: 'This user does not exist found'
              });
            }
            // if a user is already in the group
            group.hasUser(user).then((result) => {
              if (result) {
                return res.status(404).send({
                  message: 'User is already a group member'
                });
              }

              // adds the user to the group
              group.addUser(userId);

              return res.status(201).send({
                message: 'User successfully added to group'
              });
            });
          });
      }).catch(error => res.status(400).send(error));
  },


  // adds a new message to the group 
  addMessageToGroup(req, res) {
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    // decodes token//
    const access = decode(token);
    const userId = access.user.id;

    // checks if a group exist//
    return models.Group
      .findById(req.params.id)
      .then((group) => {
        if (!group) {
          return res.status(404).send({
            message: 'Group not found'
          });
        }
        // checks if the user belongs to the group
        group.hasUser(userId).then((result) => {
          if (!result) {
            return res.status(404).send({
              message: 'User does not belong to this group'
            });
          }
        });

        // creates message
        models.Message.create({
          content: req.body.content,
          priority: req.body.priority,
          userId,
          groupId: group.id
        });

        return res.status(201).send({
          message: 'Message sent'
        });
      })
      .catch(error => res.status(400).send(error));
  },


  // Get the messages for a group
  getGroupMessages(req, res) {
    return models.Group
      .findOne({ where: { id: req.params.id },
        include: [{ model: models.Message, as: 'messages' }] })
      .then((group) => {
        if (!group) {
          return res.status(404).send({
            message: 'Group not found'
          });
        }
        // return group messages//
        group.getMessages().then(messages => res.status(200).send(messages));
      })
      .catch(error => res.status(400).send(error));
  },

  // Get group users
  getGroupUsers(req, res) {
    const groupId = req.params.id;

    models.Group
      .findById(groupId)
      .then((group) => {
        if (!group) {
          return res.status(404).send({
            message: 'Group not found'
          });
        }

        return group.getUsers({ attributes: ['username', 'email'] }).then(groupUsers => res.status(200).send(groupUsers));
      });
  },
  // group test delete after usage
  groupTest(req, res) {
    hello.message();
    return res.status(200).send({
      message: 'test reached'
    });
  }


};

