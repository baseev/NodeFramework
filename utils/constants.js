//Server name
var SERVER_NAME = "localhost"

//Server port, default port is 80
var SERVER_PORT = ""

//Response Headers (cutrom headers also added)
var RESPONSE_HEADERS = {"Content-Type": "text/html", "join-us" : "baseev@gmail.com"};

//Log level
var LOG_LEVEL = 3;

//Master connection params
var MASTER_DATABASE_CONNECTION = {
  			hostname: 'localhost',
	       	user: 'root',
	        password: '',
	        database: 'petz'
		}
		
//Slave connection params
var SLAVE_DATABASE_CONNECTION = {
  			hostname: 'localhost',
	       	user: 'root',
	        password: '',
	        database: 'petz'
		}	
		
		
exports.MASTER_DATABASE_CONNECTION 	= MASTER_DATABASE_CONNECTION;
exports.SLAVE_DATABASE_CONNECTION 	= SLAVE_DATABASE_CONNECTION;
exports.RESPONSE_HEADERS 			= RESPONSE_HEADERS;
exports.LOG_LEVEL					= LOG_LEVEL;