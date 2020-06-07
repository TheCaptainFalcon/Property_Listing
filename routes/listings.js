const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');
const ListingModel = require('../models/ListingModel');

const validateListingInput = require('../validation/listing');

router.get('/test', (req, res) => res.json({ msg: 'Listing works'}));

router.get('/', (req, res) => {
    ListingModel.find()
        .sort({date: -1})
        .then(listings => res.json(listings))
        .catch(err => res.status(404).json({ nolistingsfound: "No listings found"}));
});

router.get('/:id', (req, res) => {
    ListingModel.findById(req.params.id)
    .then(listing => res.json(listing))
    .catch(err => res.status(404).json({ nolistingfound: "No listing found with that ID"}));
});

router.delete('/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
    ListingModel.findById(req.params.id)
        .then(listing => {
            listing.remove().then(() => res.json({ success: true }));
        })
    .catch(err => res.status(404).json({ listingStatus: 'No listing found' }));
})

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { errors, isValid } = validateListingInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }
    
    const newListing = new ListingModel ({
        user: req.user.id,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        br: req.body.br,
        ba: req.body.ba,
        price: req.body.price
    });
    newListing.save().then(listing => res.json(listing));
});

module.exports = router;