const _=require('lodash');
const bcrypt =require('bcrypt');
const router=require('express').Router();
const User=require('../models/user.models');

router.post('/',async(req,res)=>{
const registerdUser= await User.findOne({email:req.body.email});
if(!registerdUser) return res.status(400).send('user Not registerd');
const auth=await bcrypt.compare(req.body.password,registerdUser.password);
if(!auth) return res.status(400).send('user Not registerd');
return res.send(true);
});

module.exports=router;