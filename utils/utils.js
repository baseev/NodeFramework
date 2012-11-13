var fs = require("fs");
var path = require("path");
var constants = require("./constants");
var mysql = require('db-mysql');
var generic_pool = require('generic-pool');
var Logger = require('bunyan');

/*
Reads a file (mostly a Mustache template)
*/
function getContents(loc, fileName, ext, callback) 
{
   	fs.readFile(path.join(loc, fileName + "." + ext), "utf8", callback);
}


/*
Gets the master db connection
*/
function getMasterDbConnection()
{
	var pool = generic_pool.Pool({
	    name: 'mysql',
	    max: 10,
	    create: function(callback) {
	        new mysql.Database(
	          	constants.MASTER_DATABASE_CONNECTION
	        ).connect(function(err, server) {
	            callback(err, this);
	        });
	    },
	    destroy: function(db) {
	        db.disconnect();
	    }
	});
	
	return pool;
}



/*
Gets the slave db connection
*/
function getSlaveDbConnection()
{
	var pool = generic_pool.Pool({
	    name: 'mysql',
	    max: 10,
	    create: function(callback) {
	        new mysql.Database(
	          	constants.SLAVE_DATABASE_CONNECTION
	        ).connect(function(err, server) {
	            callback(err, this);
	        });
	    },
	    destroy: function(db) {
	        db.disconnect();
	    }
	});
	
	return pool;
}


//Logger
var logger 	= new Logger(constants.LOG_INFO);
logger.level(constants.LOG_LEVELS);
var LOG 	= logger;

exports.getContents 			= getContents;
exports.getMasterDbConnection 	= getMasterDbConnection;
exports.getSlaveDbConnection 	= getSlaveDbConnection;
exports.LOG 					= LOG;
