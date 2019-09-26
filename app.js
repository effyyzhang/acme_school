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

  app.post('/api/students', (req, res, next)=> {
    Student.create(req.body)
      .then( student => res.send(student))
      .catch(next);
  });

  app.delete('/api/students/:id', (req, res, next)=> {
    Student.findByPk(req.params.id)
      .then( student => student.destroy())
      .then( () => res.sendStatus(204))
      .catch(next);
  });

app.use((err, req, res, next)=> {
    res.status(err.status || 500).send({ message: err.message});
  });

