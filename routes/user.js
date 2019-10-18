const _=require('lodash');
const bcrypt =require('bcrypt');
const router=require('express').Router();
const User=require('../models/user.models');

router.post('/',async(req,res)=>{
const registerdUser= await User.findOne({email:req.body.email});
if(registerdUser) return res.status(400).send('user already registerd');
const salt =await bcrypt.genSalt(10);
let newUser=new User;
newUser.email=req.body.email;
newUser.name=req.body.name;
newUser.password=await bcrypt.hash(req.body.password,salt);
console.log(newUser.password);
const addedUser =await newUser.save();
res.send(_.pick(addedUser,['_id','name','email']));
});

module.exports=router;