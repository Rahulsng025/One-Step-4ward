const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');

//Multer image store
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-')+ file.originalname);
    }
});

const upload = multer({storage: storage});

const Blog = require('../models/blog');

// Handling Get Request Route
router.get('/', (req, res, next) => {
    Blog.find()
    .exec()
    .then(docs => {
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        }); 
    });
});

// Handling Post Request Route
router.post('/', upload.single('blogImage'),(req, res, next) => {
    console.log(req.file);
        const blog = new Blog({
            _id: new mongoose.Types.ObjectId(),
            title: req.body.title,
            description: req.body.description,
            blogImage: req.file.path
            
            
        })
    blog
    .save()
    .then(result => {
        console.log(result);
        res.status(200).json({
            message: 'Handling a POST request to blog',
            createdBlog: result
       });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    }); 
    
   
});

// Handling Get By ID request Route 
router.get('/:blogId', (req, res, next) => {
    const id = req.params.blogId;
    Blog.findById(id)
    .exec()
    .then(doc => {
        console.log("From Database" , doc);
        if(doc) {
            res.status(200).json(doc);
        }
        else {
            res.status(404).json({
                message: 'No valid entry found for provided ID'
            });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});


// Handling Patch Request Route
router.patch('/:blogId', (req, res, next) => {
    const id = req.params.blogId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Blog.update({_id: id}, { $set: updateOps})
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

// Handling Delete Request Route
router.delete('/:blogId', (req, res, next) => {
    const id = req.params.blogId;
    Blog.remove({_id: id})
    .exec()
    .then(result => {
        res.status(200).json(result);
        })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

module.exports = router;