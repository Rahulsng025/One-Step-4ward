const express = require('express');
const mongoose  = require('mongoose');
const router = express.Router();

const Contact  = require('../models/contact');

router.get('/',(req, res, next) =>{
    Contact.find()
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

router.post('/', (req, res, next) => {
    const contact = new Contact({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    })
    contact
    .save()
    .then(result => {
        console.log(result);
        res.status(200).json({
            message: "Handling a POST request to contact",
            createdContact: result
        });
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.get('/:contactId', (req, res, next)=> {
    const id = req.params.contactId;
    Contact.findById(id)
    .exec()
    .then(docs => {
        console.log("From Database", docs);
        if(docs){
            res.status(200).json(docs);
        }
        else {
            res.status(404).json({
                message: "No Valid entry found for provided ID"
            });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

router.patch('/:contactId', (req, res, next) => {
    const id = req.params.contactId;
    const updateOps = {};
    for(const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Contact.update({_id: id}, {$set: updateOps})
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

router.delete('/:contactId', (req,res, next) => {
    const id = req.params.contactId;
    Contact.remove({_id: id})
    .exec()
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

module.exports = router;