const mongoose=require('mongoose');

const schema=mongoose.Schema;

const skillSchema = new Schema({
    skillName: { type: String, required: true, unique: true, minlength: 5 },
    description: { type: String, required: true ,minlength: 50},
});

const skillModel = mongoose.model('skill', skillSchema);

module.exports=skillModel;
