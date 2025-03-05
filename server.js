const http = require("http");
const server  = http.createServer(function(req, res){
    res.end("Hello, World");
});


server.listen(3000, function(){ console.log("Сервер запущено за адресою http://localhost:3000")});