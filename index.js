var http = require('http');

console.log(`Nodejs started on 3000 top`);
//create a server object:
http.createServer(function (req, res) {
  console.log(`Nodejs started on 3000 top inner`);
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(3000); //the server object listens on port 8080