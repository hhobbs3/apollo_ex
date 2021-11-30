const mongoose = require('mongoose');
const MagicItemSchema = new mongoose.Schema({

    table: {
        type: String,
        required: true
    },
    item: {
        type: String,
        required: true
    },
    lowProbability: {
        type: Number,
        required: true
    },
    highProbability: {
        type: Number,
        required: true
    },
});

const MagicItem = mongoose.model('magicItem', MagicItemSchema);
module.exports = MagicItem;