const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');

const {School} = require('./db').models;
const {Student} = require('./db').models;

module.exports = app;

//!very important
app.use('/build', express.static(path.join(__dirname, 'dist')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  })

  const routes = {
    School: 'schools',
    Student: 'students'
  }

  Object.keys(routes).forEach(key => {
    app.get(`/api/${routes[key]}`, (req, res, next) => {
      db.models[key].findAll()
        .then(items => res.send(items))
        .catch(next)
    })
  })


  // app.get("/api/schools", (req, res, next) => {
  //   School.findAll()
  //     .then(schools => res.send(schools))
  //     .catch(next);
  // });

  // app.get('/api/students'), (req, res, next) => {
  //   Student.findAll()
  //   .then(students => res.send(students))
  //   .catch(next);
  // }
  //to be continue

app.use((err, req, res, next)=> {
    res.status(err.status || 500).send({ message: err.message});
  });

