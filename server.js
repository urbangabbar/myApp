const express=require('express');
const app =express();
const cors =require('cors');
//require('dotenv').config;
const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
    .then(()=>console.log('connection established'));

app.use(cors);
app.use(express.json());

const port=process.env.port||200;
app.listen(port,()=>{
    console.log("server started on port"+port);
})
