const mongoose=require('mongoose');

const schema=mongoose.Schema;

const user = new Schema({
    email: { type: String, required: true, unique: true, minlength: 5 },
    name: { type: String, required: true },
    password: { type: String, required: true }
});

const userModel = mongoose.model('user', user);

module.exports=userModel;
