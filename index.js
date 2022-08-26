//dependencies
const http = require("http");
const url = require("url");
const fs = require("fs");
// module scaffoldings
const app = {};
// configuration variables
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(3000, () => {
    console.log("Listening on port 3000");
  });
};

//handler createServer
app.handleReqRes = (req, res) => {
  // request handler
  const parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl);
  const path = parsedUrl.path;
  console.log(path);
  const triemPath = path.replace(/^\/+|\/+$/g, "");
  console.log(triemPath);
  const method = req.method.toLowerCase();
  console.log(method);
  const queryStringObject = parsedUrl.query;
  console.log(queryStringObject);
  //response handler
  res.end("sabbir al azim shehab");
};
app.createServer();
