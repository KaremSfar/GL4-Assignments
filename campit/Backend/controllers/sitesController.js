const{CampingSite,validate} = require('../models/CampingSite');
const _ = require('lodash');
const {User} = require('../models/user.model');

exports.addSite = async function(req,res){
    const {error} = validate(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    }

    let owner = await User.findById(req.user._id);
    if(!owner){
        return res.status(500).send('An internal error happened, please login again');
    }

    let site = new CampingSite({
        name: req.body.name,
        description:req.body.description,
        email:req.body.email,
        phone:req.body.phone,
        unitPrice: req.body.unitPrice,
        placesAvailable: req.body.placesAvailable,
        owner : {
            _id: owner._id,
            name: owner.name,
            email: owner.email
        },
        location:{
            type: 'Point',
            coordinates: req.body.coordinates
        }
    });
    site.location = {
        type: 'Point',
        coordinates: req.body.location
    };
  

    site.owner.name = owner.name;
    site.owner.email = owner.email;

    await site.save();
    res.send(site);
}

exports.getSites = async function(req,res){
    const sites = await CampingSite.find();
    res.send(sites)
}
