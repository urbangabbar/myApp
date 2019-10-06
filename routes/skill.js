const router=require('express').Router();
const skill=require('../models/skill.model');

router.get('/',(req,res)=>{
    skill.find()
        .then(skills=> res.send(skills))
        .catch(err=>res.sendStatus(err));
});

router.get('/:id',(req,res)=>{
    skill.findById(req.params.id)
        .then(skill=>res.send(skill))
        .catch(err=>res.send(err));
})