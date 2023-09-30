const { default: mongoose } = require('mongoose')
const moongoose = require('mongoose')

const ContactSchema = new moongoose.Schema({
    name:String,
    email:String,
    message:String
})

const RegisterModel = mongoose.model("portfolio", ContactSchema);

module.exports = RegisterModel;