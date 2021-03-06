const mongoose = require('mongoose');

const promotionSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    slug: {
        type: String,
    },
    code: {
        type: String,
        require: true
    },
    value: {
        type: Number,
        require: true,
    },
    quantity: {
        type: Number,
    },
    expiryDate: {
        type: Date,
        default: Date.now() + 7,
    },
    image: {
        type: String,
        default: '/img/sale.png',
    }
})

const Promotion = mongoose.model('Promotion', promotionSchema);
module.exports = Promotion;
