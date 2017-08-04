/*eslint-disable */
import express from 'express';
import authenticate from '../middleware/authenticate.js';

const group = express.Router();
const groupController = require('../server/controllers').groups;


group.use(authenticate);

/* GET users listing. */
group.post('/', groupController.create);
group.get('/all', groupController.list);
group.post('/:id/user', groupController.addUserToGroup);
group.post('/:id/message', groupController.addMessageToGroup);
group.get('/:id/message', groupController.getGroupMessages);


module.exports = group;
