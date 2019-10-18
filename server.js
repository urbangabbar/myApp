const express=require('express');
const app =express();
const mongoose=require('mongoose');
const skillRouter=require('./routes/skill');
const userRouter=require('./routes/user');
const authenticate =require('./routes/auth');

mongoose.connect('mongodb://localhost/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
    .then(()=>console.log('connection established'));

app.use(express.json());
app.use('/api/skill',skillRouter);
app.use('/api/user',userRouter);
app.use('/api/auth',authenticate);

const port=process.env.port||3000;
app.listen(port,()=>{
    console.log("server started on port"+port);
})
