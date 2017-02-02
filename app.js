//What: Builder a server for Node to listen on
//Why: Because I want to make my app available to other users
//How: Bring in the 'express' library as a Node package to build server
var express = require('express');
var app = express();
var PORT = 3000;

app.use(express.static('public'));

app.listen(PORT, function() {
  console.log('Server now listening on port', PORT);
});
