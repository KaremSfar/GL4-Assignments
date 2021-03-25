const {Reservation,validate} = require('../models/Reservation');
const {CampingSite} = require('../models/CampingSite');

exports.addReservation = async function(req,res){
    const {error} = validate(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    }

    let campingSite = await CampingSite.findById(req.body.campingSite);

    if(!campingSite){
        return res.status(500).send('An internal error happened, please login again');
    }

    let dateSpan = new Date(req.body.endDate) - new Date(req.body.startDate);

    dateSpan = Math.ceil(dateSpan/86400000);

    let total = dateSpan * campingSite.unitPrice;

    let reservation = new Reservation({
        user: req.user._id,
        campingSite: req.body.campingSite,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        total: total
    });

    await reservation.save();

    reservation = await Reservation
        .findById(reservation._id)
        .populate('user')
        .populate('campingSite');

    res.send(reservation);
}
