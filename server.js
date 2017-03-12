var http = require('http');

http.createServer(function(request, response){
	if(request.url == "/produtos"){
	response.end("<html><body><h1>Listando produtos</h1></body></html>")
}else{
	response.end(("<html><body><h1>Home</h1></body></html>"))
}
}).listen(3000);

console.log("Servidor rodando");
