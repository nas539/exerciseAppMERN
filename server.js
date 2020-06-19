const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 8080;
const app = express();

require('dotenv').config();

app.use(express.static(__dirname + '/dist/'));
app.get(/.*/, function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
})
app.use(cors());
app.use(bodyParser.json());
app.listen(port);

console.log("server started");