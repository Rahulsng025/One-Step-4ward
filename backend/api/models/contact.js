const mongoose = require('mongoose')
const { stringify } = require('querystring')
const contactSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    subject: String,
    message: String
})

module.exports = mongoose.model('Contact', contactSchema)