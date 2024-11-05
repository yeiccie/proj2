

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World! This is response from ChenBei\'s computer to you.');
  hello();
  
}).listen(8080);


/**
 * The first nodeJS
 */
function hello(){
    console.log("Hello world! This is a log on server console....");
}


