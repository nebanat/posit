const Group =require('../models').Group
//const md5 = require('md5');

module.exports = {
  create(req, res) {
    return Group
      .create({
        name: req.body.name,
        description:req.body.description,
    })
      .then(group => res.status(201).send(group))
      .catch(error => res.status(400).send(error));
  },
};

