const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String,
    timeDate: String,
    picture: String 

})

module.exports = mongoose.model('Blog', blogSchema)