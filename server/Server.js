const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const ContactModel = require('./models/conact')
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/mswd')



app.post('/contact' , (req,res) =>{
  const {username , email , message} = req.body;
  ContactModel.findOne({email:email})
  .then((user) =>{
    if(user){
      res.json("Already gave feedback");
      
    }else{
      ContactModel.create({username:username,email:email,message:message})
      .then((result) => res.json("Feedback Submitted"))
      .catch(err => res.json(err))
    }
  }).catch(err => res.json(err))
});

app.listen(8888, () => {
  console.log("Server Started");
});

