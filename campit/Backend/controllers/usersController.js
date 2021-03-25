const bcrypt = require("bcrypt");
const { User, validate } = require("../models/user.model");
const _ = require('lodash');
const moment = require('moment');
const mailer = require('../services/mailer');
const Joi = require('joi');

exports.registerUser = async function (req, res) {
    // validate the request body first
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //find an existing user
    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send("User already registered.");
    if (req.body.dateOfBirth) {
        req.body.dateOfBirth = moment(req.body.dateOfBirth, "YYYY-MM-DD");
    }

    user = new User(_.pick(req.body, ['name', 'email', 'password', 'roles', 'phone', 'dateOfBirth']));

    //Hashing password
    user.password = await bcrypt.hash(user.password, 10);

    await user.save();

    //Send mail to user email containing the link to verify user
    await mailer.sendVerifyMail(user.email,user.id);

    //Token to be returned to user
    const token = user.generateAuthToken();
    res.header("x-access-token", token).send(_.pick(user, ['_id', 'name', 'email']));
};

exports.verifyUser = async function (req, res) {
    const user = await User.findByIdAndUpdate(req.params.id, {
        $set: {
            isActive: true
        }
    }, { new: true });

    if (!user) {
        res.status(404).send('No User Found');
        return;
    }

    res.send('Successfully Activated user');
};

exports.userProfile = async function(req, res){
    const user = await User.findById(req.user._id).select("-password -__v");
    res.send(user);
};

exports.authenticate = async function(req,res){
    const {error} = validateAuth(req.body);
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }

    let user = await User.findOne({email:req.body.email});
    if(!user){
        res.status(400).send('invalid user or password');
        return;
    }

    const validPwd = await bcrypt.compare(req.body.password,user.password);
    if(!validPwd){
        res.status(400).send('invalid user or password');
        return;
    }

    token = user.generateAuthToken();

    res.send(token);
};

function validateAuth(req){
    const schema = {
        email:Joi.string().required().min(3).max(255).email(),
        password:Joi.string().required().min(3).max(255)
    }
    return Joi.validate(req,schema);
};