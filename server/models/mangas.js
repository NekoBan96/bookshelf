const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Manga = new Schema ({
    titleName: { type: String, required: true },
    titleAltName: { type: String, required: false },
    description: { type: Number, required: false },
   // genre: { type: String, required: true },
});
module.exports = mongoose.model('manga', Manga)