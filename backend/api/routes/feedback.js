const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Feedback = require('../models/feedback');

//Handling Get Request Route.
router.get('/', (req, res, next) => {
    Feedback.find()
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
router.post('/',(req, res, next) => {
    const feedback = new Feedback({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        description: req.body.description,
        
    })
feedback    
.save()
.then(result => {
    console.log(result);
    res.status(200).json({
        message: 'Handling a POST request to Feedback',
        createdFeedback: result
    });
})
.catch(err => {
    console.log(err);
    res.status(500).json({
        error: err
    });
}); 
});

// Handling Get by ID request Route 
router.get('/:feedbackId', (req, res, next) => {
    const id = req.params.feedbackId;
    Feedback.findById(id)
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
router.patch('/:feedbackId', (req, res, next) => {
    const id = req.params.feedbackId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Feedback.update({_id: id}, { $set: updateOps})
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
router.delete('/:feedbackId', (req, res, next) => {
    const id = req.params.feedbackId;
    Feedback.remove({_id: id})
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
