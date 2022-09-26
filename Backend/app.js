const path = require('path');
const sequelize = require('./util/db');
const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controllers/error');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join('public')))

app.use(express.static(path.join(__dirname, '/public')));

const apiRoutes = require('./routes/api');

app.use(apiRoutes);
app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.use(errorController.get404);

sequelize
  .sync()
  .then(result => {
    app.listen(3033);
  })
  .catch(err => {
    console.log(err);
  });