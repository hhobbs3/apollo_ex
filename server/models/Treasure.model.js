const mongoose = require('mongoose');
const TreasureSchema = new mongoose.Schema({

    challenge: { type: String, required: true },
    type: { type: String, required: true },
    coin: { 
        type: { type: String, }, 
        diceSize: { type: Number, }, 
        diceNumber: { type: Number, }, 
    },
    item: {
        type: { type: String, }, 
        value: { type: Number, },
        diceSize: { type: Number, },
        diceNumber: { type: Number, },
    },
    magicItemTable: {
        type: { type: String, },
        diceSize: { type: Number, },
        diceNumber: { type: Number, },
    },
    lowProbability: { type: Number, required: true },
    highProbability: { type: Number, required: true },
});

const Treasure = mongoose.model('treasure', TreasureSchema);
module.exports = Treasure;