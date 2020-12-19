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

app.get('/bilInfo', (req, res) => {
  res.render('pages/bilInfo.ejs')
});

app.get('/mopedInfo', (req, res) => {
  res.render('pages/mopedInfo.ejs')
});

app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})

app.listen(port, () => {
  console.log(`${port}!`)
});