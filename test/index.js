var http = require('http'),
  PORT = 8083;

function handleRequest(request, response) {
  console.log(request);
  response.end('It Works!');
}

var server = http.createServer(handleRequest);

server.listen(PORT, '49.232.163.126', 34, function () {
  console.log('Server listening on port:%s', PORT);
});
