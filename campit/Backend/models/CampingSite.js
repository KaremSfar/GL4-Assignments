const Joi = require('joi');
const mongoose = require('mongoose');
const { userSchema } = require('./user.model');

const campingSiteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        min: 25,
        max: 255,
        required: true
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    phone: {
        type: String,
        match: /[0-9]{8}/
    },
    owner: {
        type: new mongoose.Schema({
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
                maxlength: 255
            }
        }),
        required: true
    },
    unitPrice:{
        type: Number,
        required:true
    },
    placesAvailable:{
      type:Number,
      required:true
    }
    //TODO: owners/managers
    //TODO: Places
});

const CampingSite = mongoose.model('CampingSite', campingSiteSchema);

function validateSite(site) {
    const schema = {
        name: Joi.string().min(3).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        phone: Joi.string().regex(/[0-9]{8}/),
        description: Joi.string().min(25).max(255).required(),
        location: Joi.array().items(Joi.number()).min(2).max(2),
        unitPrice: Joi.number().required(),
        placesAvailable: Joi.number().required()
    };

    return Joi.validate(site, schema);
}

exports.CampingSite = CampingSite;
exports.validate = validateSite;