var http = require("http");
var url = require("url");
var constants = require("./utils/constants");

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    try
    {
     	response.writeHead(200, constants.RESPONSE_HEADERS);
     	
    	route(handle, pathname, request, response);
    }
    catch(e)
    {
    	console.error("Exception "+e.message);
    	response.writeHead(404, {"Content-Type": "text/html"});
    	response.write("404 Not found");
    	response.end();
    }
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;