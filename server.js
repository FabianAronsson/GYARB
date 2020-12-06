const express = require('express')
const app = express();
const port = 8000;
const clientDir = __dirname + "\\client\\"

app.use(express.json());
app.use(express.static(clientDir));



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})

app.listen(port, () => {
  console.log(`${port}!`)
});