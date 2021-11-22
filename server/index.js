const express = require('express');
const bodyParser = require('body-parser');
const github = require('../helpers/github');
const db = require('../database');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  let username = req.body.username;
  github.getReposByUsername(username, db.save, () => {
    db.get().then((results) => {
      res.send(results);
      res.end();
    });
  });
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  db.get()
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      res.send(err);
    });
});

let port = process.env.PORT || 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
