var http = require('http');


http.createServer(function (req, res) {
  res.write('Hello World'); 
  res.end(); 
}).listen(8080, () => {
    console.log("server is listening on server port 8080")
}); 

