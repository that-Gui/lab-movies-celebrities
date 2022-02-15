// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const { Router } = require("express");
const router = require("express").Router();
const Movie = require('../models/Movie.model');

router.get('/movies', (req, res, next) => {
  Movie.find().then( (arr) => res.render('./movies/movies', {Movie:arr}));
});

router.get('/movies/create', (req, res, next) => {
  res.render('./movies/new-movie.hbs');
});

router.post('/movies/create', (req, res, next) => {
  const { title, genre, plot, cast } = req.body;
 
  Movie.create({ title, genre, plot, cast }).then((Element) => res.redirect('/movies'))
    .catch(err => next(err));
});


module.exports = router;