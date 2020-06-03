const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// May need to modify based on listing structure (ie. description, price, etc.)
const ListingSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: Number,
        required: true
    },
    br: {
        type: Number,
        required: true
    },
    ba: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = ListingModel = mongoose.model('listings', ListingSchema);