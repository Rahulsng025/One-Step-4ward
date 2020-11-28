const mongoose = require('mongoose');

const destinationSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String,
    picture: String


})

module.exports = mongoose.model('Destination', destinationSchema)