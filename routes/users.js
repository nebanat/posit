const express = require('express');
const router = express.Router();
const md5 = require('md5');

const userController= require('../server/controllers').users


/* GET users listing. */
router.get('/',(req, res, next)=> {
  res.send('respond with a resource');
});

router.post('/signup',userController.create);

router.post('/signin',userController.signIn);

router.use((req,res,next)=>{
  if(!req.session.user){
    return res.status(401).send();
  }

  //return res.status(200).send('Welcome to super secret key')
   next();
})

router.get('/signout',(req,res)=>{
   req.session.destroy(()=>{
     console.log('Logged Out')
   })
  res.end();
})

router.get('/all', userController.list);

module.exports = router;
