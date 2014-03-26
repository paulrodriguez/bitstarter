var express = require('express');
var app = express();
app.use(express.logger());
var fs = require('fs');
var Buffer = require('buffer').Buffer;
var indexfile = fs.readFileSync('index.html');
app.get('/', function(request, response) {
    var buffer = new Buffer(indexfile);
    response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});