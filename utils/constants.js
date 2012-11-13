//Server name
var SERVER_NAME = "localhost"

//App name
var APP_NAME	= "baseev";

//Server port, default port is 80
var SERVER_PORT = "9999";

//Custom Response Header (custom headers also added)
var JOIN_US_RESPONSE_HEADERS = "baseev@gmail.com";

//HTML Response Header (custom headers also added)
var HTML_RESPONSE_HEADERS = {"Content-Type" : "text/html; charset=utf-8", "join-us" : JOIN_US_RESPONSE_HEADERS};

//JSON Response Header (custom headers also added)
var JSON_RESPONSE_HEADERS = {"Content-Type" : "application/json", "join-us; charset=utf-8" : JOIN_US_RESPONSE_HEADERS};


//Master db connections
DB_MASTER_HOST 		= 'localhost';
DB_MASTER_USER 		= 'root';
DB_MASTER_PASSWORD 	= '';
DB_MASTER_DATABASE 	= 'petz';


//Slave db connections
DB_SLAVE_HOST 		= 'localhost';
DB_SLAVE_USER 		= 'root';
DB_SLAVE_PASSWORD 	= '';
DB_SLAVE_DATABASE 	= 'petz';

//Log level
var LOG_LEVEL 	= -1;
var LOG_INFO	= {name: APP_NAME};

//dust config
var DUST_MAIN_TEMPLATE = "assets/html/";


//Master connection params
var MASTER_DATABASE_CONNECTION = {
  			hostname	: DB_MASTER_HOST,
	       	user		: DB_MASTER_USER,
	        password	: DB_MASTER_PASSWORD,
	        database	: DB_MASTER_DATABASE
		}
		
//Slave connection params
var SLAVE_DATABASE_CONNECTION = {
			hostname	: DB_MASTER_HOST,
	       	user		: DB_MASTER_USER,
	        password	: DB_MASTER_PASSWORD,
	        database	: DB_MASTER_DATABASE
		}	
		
		
exports.SERVER_PORT					= SERVER_PORT;
exports.MASTER_DATABASE_CONNECTION 	= MASTER_DATABASE_CONNECTION;
exports.SLAVE_DATABASE_CONNECTION 	= SLAVE_DATABASE_CONNECTION;
exports.HTML_RESPONSE_HEADERS 		= HTML_RESPONSE_HEADERS;
exports.LOG_LEVEL					= LOG_LEVEL;
exports.LOG_INFO					= LOG_INFO;
exports.DUST_MAIN_TEMPLATE			= DUST_MAIN_TEMPLATE;
