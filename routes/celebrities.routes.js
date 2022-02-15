// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const { Router } = require("express");

const router = require("express").Router();

const Celebrity = require('../models/Celebrity.model');

router.get('/celebrities', (req, res, next) => {
  Celebrity.find().then( (arr) => res.render('./celebrities/celebrities', {Celebrity:arr}));
});

router.get('/celebrities/create', (req, res, next) => {
  res.render('./celebrities/new-celebrity.hbs');
});

router.post('/celebrities/create', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
 
  Celebrity.create({ name, occupation, catchPhrase }).then((Element) => res.redirect('/celebrities'))
    .catch(err => next(err));
});

module.exports = router;