const express           = require('express');
const server            = express();
const router            = require('./server/controllers/index.js');
const path              = require('path');
//const MongoClient       = require('mongodb').MongoClient;
//const ObjectID          = require('mongodb').ObjectID;
const bodyParser        = require('body-parser');



server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(express.static(path.join(__dirname, 'client/build')));
server.use(router);


server.listen(3000, function () {
  console.log('FlightR running on port ' + this.address().port);
});
