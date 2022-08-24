const http = require("http");
 const fs = require("fs");
const port = 8081;
const server = http.createServer(function (req, res) {
  

  res.end("server start at http://localhost:" + port);
 
  
});

server.listen(port);
console.log("server listening on " + port + " port");
