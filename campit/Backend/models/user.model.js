const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const mongoose = require('mongoose');

//simple schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255
  },
  phone: {
    type:String,
    match: /[0-9]{8}/
  },
  dateOfBirth:{
    type:Date
  },
  roles: [{
    type:String,
    enum:['user','host','admin']
  }],
  isActive : {
    type: Boolean,
    default: false
  }
});


//custom method to generate authToken 
userSchema.methods.generateAuthToken = function() { 
  const token = jwt.sign({ _id: this._id, roles:this.roles, isActive:this.isActive }, config.get('myprivatekey')); //get the private key from the config file -> environment variable
  return token;
}

const User = mongoose.model('User', userSchema);

//function to validate user 
function validateUser(user) {
  const schema = {
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(3).max(255).required(),
    roles: Joi.array().items(Joi.string().valid('user','host','admin')),
    phone: Joi.string().regex(/[0-9]{8}/),
    dateOfBirth: Joi.date()
  };

  return Joi.validate(user, schema);
}

exports.User = User; 
exports.validate = validateUser;
exports.userSchema = userSchema