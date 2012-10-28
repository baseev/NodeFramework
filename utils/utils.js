var fs = require("fs");
var path = require("path");
var constants = require("./constants");
var mysql = require('db-mysql');
var generic_pool = require('generic-pool');

/*
Reads a file (mostly a Mustache template)
*/
function getContents(loc, fileName, ext, callback) 
{
   	fs.readFile(path.join(loc, fileName + "." + ext), "utf8", callback);
}


function debug(msg, level)
{
	switch(constants.LOG_LEVEL)
		{
			case 0 : 
				console.log("Log :: "+msg);
				break;
			case 1 : 
				console.info("Info :: "+msg);
				break;
			case 2 : 
				console.warn("Warn :: "+msg);
				break;
			case 3 : 
				console.error("Error :: "+msg);
		}
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

exports.debug = debug;
exports.getContents = getContents;
exports.getMasterDbConnection = getMasterDbConnection;
exports.getSlaveDbConnection = getSlaveDbConnection;
