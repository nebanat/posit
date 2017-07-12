const User =require('../models').User
const md5 = require('md5');

module.exports = {
  create(req, res) {
    return User
      .create({
        username: req.body.username,
        email:req.body.email,
        password:req.body.password
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
  signIn(req,res){
    return User
      .findOne({ where:{
         username: req.body.username, password:req.body.password
       } 
      })
      .then(user=>{
        if(!user){
          return res.status(404).send({
            message:'Invalid Auth details'
          })
        }
        req.session.user=user
        return res.status(200).send(user)
      })
      .catch(error=>res.send(400).send(error));

  },
 list(req, res){
    return User
       .all({
         include:[{all:true}]
       })
       .then(users=>res.status(200).send(users))
       .catch(error=>res.status(400).send(error))
  },
};