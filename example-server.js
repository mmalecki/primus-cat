var http = require('http');
var Primus = require('primus');

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.write('Hello! Connect to this server with `primus-cat`:\n\n');
  res.write('  primus-cat http://localhost:' + server.address().port + '\n\n');
  res.end();
});
var primus = new Primus(server);

primus.on('connection', function (spark) {
  var id = setInterval(function () {
    spark.write({ data: Math.random() * 100 });
  }, 500);

  spark.on('close', function () {
    clearInterval(id);
  });
});

server.listen(8000);
