/*eslint-disable */
import models from '../models';

import decode from 'jwt-decode'


module.exports = {
  create(req, res) {
    /** validates user input */
    if(!req.body.name){
      return res.status(402).send({
        message:'Enter group name'
      })
    }
    /**decodes token */
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
     
    const access= decode(token)
    

    //res.stop();

    return models.Group
      .create({
        name: req.body.name,
        description: req.body.description,
      })
      .then((group) => {
        // console.log(group.id)
        models.UsersGroups.create({
          userId:access.user.id,
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
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
     
    const access= decode(token);

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
          userId: access.user.id,
          groupId: group.id
        });

        return res.status(201).send({
          'message':'Message sent'
        });
      })
      .catch(error => res.status(400).send(error));
  },
  getGroupMessages(req, res) {
    return models.Group
      .findOne({ where: { id: req.params.id },
        include: [{ model: models.Message, as: 'messages' }] })
      .then((group)=>{
        if(!group){
          return res.status(404).send({
            'message':'Group not found'
          })
        }
        return models.Message
        .findAll({where:{groupId:group.id}})
        .then((messages)=>{
          return res.status(200).send(messages)
        })
        //return res.status(201).send(group.messages)
      })
      .catch(error => res.status(400).send(error));
  },
  getUserGroups(req,res){
    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    console.log(token)
  }  


};

