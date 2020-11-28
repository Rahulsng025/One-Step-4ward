const mongoose = require('mongoose');

const feedbackSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    description: String,
    
})

module.exports = mongoose.model('Feedback', feedbackSchema)