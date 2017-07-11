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
  list(req, res){
    return Group
       .all()
       .then(groups=>res.status(200).send(groups))
       .catch(error=>res.status(400).send(error))
  },
  getGroup(req, res){
    return Group
       .findById(req.params.id)
       .then(group=>{
         if(!group){
           return res.status(404).send({
             message:'Group not found'
           })
         }
         return res.send(group);
       })
       .catch(error=>res.status(400).send(error))
  }

};

