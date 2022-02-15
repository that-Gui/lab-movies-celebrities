// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const { Router } = require("express");
const router = require("express").Router();
const Movie = require('../models/Movie.model');
const Celebrity = require('../models/Celebrity.model');

router.get('/movies', (req, res, next) => {
  Movie.find().then( (moviesarr) => res.render('./movies/movies.hbs', { moviesarr })).catch(err => next(err));
});

router.get('/movies/create', (req, res, next) => {
  Celebrity.find().then( (celebarr) =>  res.render('./movies/new-movie.hbs', { celebarr })).catch(err => next(err));
});

router.post('/movies/create', (req, res, next) => {
  const { title, genre, plot, cast } = req.body;
 
  Movie.create({ title, genre, plot, cast }).then((Element) =>{ 
    console.log(Element);
    res.redirect('/movies')}).catch(err => next(err));
});

router.get('/movies/:id/', (req, res, next) => {
  const { id } = req.params;
  Movie.findById(id).populate('cast').then( (movdets) => res.render('./movies/movie-details.hbs', { movdets })).catch(err => next(err));
});


module.exports = router;