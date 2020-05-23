const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');
const ListingModel = require('../models/ListingModel');

const validateListingInput = require('../validation/listing');

router.get('/test', (req, res) => res.json({ msg: 'Listing works'}));

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateListingInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }
    
    const newListing = new ListingModel ({
        title: req.body.title,
        text: req.body.text,
        user: req.user.id
    });
    newListing.save().then(listing => res.json(listing));
});

module.exports = router;