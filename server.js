const express = require('express')
const messageModel = require('./messageModel')
const personModel = require('./personModel')
const dBModule = require('./dBModule');
const {
  urlencoded
} = require('express');
const app = express();
const port = 8000;
const clientDir = __dirname + "\\client\\"

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(clientDir));

app.get('/', async (req, res) => {
  var post = await messageModel.getAllMessages({});
  res.render('pages/index.ejs', {
    posts: post
  })
});

app.get('/carInfo', (req, res) => {
  res.render('pages/carInfo.ejs')
});

app.get('/mopedInfo', (req, res) => {
  res.render('pages/mopedInfo.ejs')
});

app.get('/contact', (req, res) => {
  res.render('pages/contact.ejs')
});

app.get('/location', (req, res) => {
  res.render('pages/location.ejs')
});

app.post('/', async function (req, res) {
  let person = personModel.createPerson(req.body.inputName,
    req.body.inputLName, req.body.inputEmail,
    req.body.inputAddress, req.body.inputNumber,
    req.body.inputCity, req.body.inputZip)
  await dBModule.store(person)
  console.log('Person saved in database!')
  res.render('pages/index.ejs', {
    posts: []
  })
});

app.post('/review', async function (req, res) {

  let review = messageModel.newMessage(req.body.inputUsername, req.body.inputReview, req.body.star);
  dBModule.store(review);
  console.log('Message saved in database!');

  let post = await messageModel.getAllMessages({});
  res.render('pages/index.ejs', {
    posts: post
  });
});

app.listen(port, () => {
  console.log(`${port}!`)
});