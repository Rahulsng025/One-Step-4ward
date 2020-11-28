const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const About = require('../models/about');

// Handling Get Request Route
router.get('/', (req, res, next) => {
    About.find()
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
router.post('/', (req, res, next) => {
    const about = new About({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        description: req.body.description,
        picture: req.body.picture
    })
    about
    .save()
    .then(result => {
        console.log(result);
        res.status(200).json({
            message: 'Handling a POST request to about',
            createdAbout: result
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
router.get('/:aboutId', (req, res, next) => {
    const id = req.params.aboutId;
    About.findById(id)
    .exec()
    .then(docs => {
        console.log('From Database', docs);
        if(docs) {
            res.status(200).json(docs);
        }
        else {
            res.status(404).json({
                message: 'NO valid entry found for provided Id'
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
    const id = req.params.aboutId;
    const updateOps = {};
    for(const ops of req.body) {
        updateOps[ops.propName] = ops.value
    }
    About.update({_id: id}, { $set: updateOps })
    .exec()
    .then( result => {
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
router.delete('/:aboutId', (req, res, next) => {
    const id = req.params.aboutId;
    About.remove({_id: id})
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
});

module.exports = router;
