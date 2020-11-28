const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String,
    blogImage: String
   
 

})

module.exports = mongoose.model('Blog', blogSchema)