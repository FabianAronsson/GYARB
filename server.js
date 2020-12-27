const express = require('express')
const messageModel = require('./messageModel')
const app = express();
const port = 8000;
const clientDir = __dirname + "\\client\\"

app.use(express.json());
app.use(express.static(clientDir));



app.get('/', (req, res) => {
  res.render('pages/index.ejs')
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

app.post('/signup', function (req, res) {
  //save user in DB
  res.render('pages/index.ejs')
  console.log('test')
})

app.listen(port, () => {
  console.log(`${port}!`)
});