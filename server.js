var http =require ("http");

function start(){
    function onRequest(request,response){
        console.log("Request Received");
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write("Hello World");
        response.end();
    }
    http.createServer(onRequest).listen(1234);
    console.log("démarage du serveur");
}

exports.start = start;