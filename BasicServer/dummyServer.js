var http = require('http');

function onRequest(request, response){

    console.log("User made a request for : " + request.url);
    response.writeHead(200, {'Context-Type' : 'text/plain'});
    response.write("All good and done..Here is your data...");
    response.end();
}

http.createServer(onRequest).listen(8888);
console.log("The server is up and running...");