var http = require("http");
var url = require("url");
var constants = require("./utils/constants");

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    try
    {
    	route(handle, pathname, request, response);
    }
    catch(e)
    {
    	console.error("Exception "+e.message);
    	response.writeHead(404, constants.HTML_RESPONSE_HEADERS);
    	response.write("404 Not found");
    	response.end();
    }
  }

  http.createServer(onRequest).listen(constants.SERVER_PORT);
  console.log("Server has started at port : "+constants.SERVER_PORT);
}

exports.start = start;