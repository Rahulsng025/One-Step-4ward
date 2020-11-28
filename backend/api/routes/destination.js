const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const blog = require('../models/blog');

const Destination = require('../models/destination');

// Handling Get Request Route
router.get('/', (req, res, next) => {
    Destination.find()
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

//Handling Post Request Route
router.post('/', (req, res, next) => {
    const destination = new Destination({
        _id: new mongoose.Types.ObjectId(),
            title: req.body.title,
            description: req.body.description,
            picture: req.body.picture
    })
    destination.save()
    .then(result => {
        console.log(result);
        res.status(200).json({
            message: 'Handling a POST request to destination',
            createdDestination: result
        });
    })
    .catch(err =>{
        console.log(500).json({
            error: err
        });
    });
});

//Handling Get By ID request Route
router.get('/:destinationId', (req, res, next) => {
    const id = req.params.destinationId;
    Destination.findById(id)
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
router.patch('/:destinationId', (req, res, next) => {
    const id = req.params.destinationId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Destination.update({_id: id}, { $set: updateOps})
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
router.delete('/:destinationId', (req, res, next) => {
    const id = req.params.destinationId;
    Destination.remove({_id: id})
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