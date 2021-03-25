const Joi = require('joi');
const mongoose = require('mongoose');

Joi.objectId = require('joi-objectid')(Joi);

const reservationSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    campingSite:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"CampingSite",
        required:true
    },
    startDate:{
        type:Date,
        required:true,
        default:Date.Now
    },
    endDate:{
        type:Date,
        required:true
    },
    total:{
        type: Number,
        required:true
    }
});

const Reservation = mongoose.model('Reservation',reservationSchema);

function validateReservation(reservation){
    const schema = {
        campingSite: Joi.objectId().required(),
        startDate: Joi.date(),
        endDate: Joi.date().required()
    }

    return Joi.validate(reservation,schema);
}

exports.Reservation = Reservation;
exports.validate = validateReservation;