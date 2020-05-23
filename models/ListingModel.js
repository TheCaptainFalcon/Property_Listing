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
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = ListingModel = mongoose.model('listings', ListingSchema);