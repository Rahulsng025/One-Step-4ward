const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 


// Routes
const blogRoutes = require('./api/routes/blog');
const aboutRoutes = require('./api/routes/about');
const contactRoutes = require('./api/routes/contact');
const destinationRoutes = require('./api/routes/destination');
const feedbackRoutes = require('./api/routes/feedback');



//Mongoose Connection
mongoose.connect('mongodb+srv://Rahulsng25:'+ process.env.MONGO_ATLAS_PW  +'@one-step-forward.zpuq3.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useUnifiedTopology: true, useNewUrlParser: true
})

//Morgan Middleware
app.use(morgan('dev'));

//Body-Parser Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS (C-Cross O-Origin R-Resource S-Sharing) Errors
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONs") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
  });

//Routes which handles request. 
app.use('/blog', blogRoutes);
app.use('/contact', contactRoutes);
app.use('/about', aboutRoutes);
app.use('/destination', destinationRoutes);
app.use('/feedback', feedbackRoutes);



app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;
