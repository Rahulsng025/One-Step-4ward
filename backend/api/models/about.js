const mongoose = require('mongoose');

const aboutSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String,
    picture: String
})

module.exports = mongoose.model('About', aboutSchema)