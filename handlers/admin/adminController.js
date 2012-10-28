var path = require("path");
var Mustache = require('./../../../mustache');
var utils = require('./../../utils/utils');
var startModel = require('./startModel');
var Q = require('q');
var async = require('async');



function index(response, request) {
  	
  	var path = __dirname+"/templates/";
  		
	response.writeHead(200, {"Content-Type": "text/html", "join-us" : "baseev@gmail.com"});

	async.parallel({
						"template": function(callback){
					    				utils.getContents(path, "index", "tpl", function(err, template){
					    						callback(err, template);
					    					}
					    				);
					    		},
					    		
					    "PiwikUsers": 	function(callback){				
							    			startModel.getPiwikUsers(function(rows) {
												callback(null, rows);
											}
										);
					    		},
					    		
					    "PiwikSites": 	function(callback){
											startModel.getPiwikSites(function(rows) {
												callback(null, rows);
											}
										);
					    		},
					    
					},
					
					function(err, results) {
						//response.write(JSON.stringify(results));
						var output = Mustache.render(results.template, results);
						response.write(output);
						response.end();
					});
	
	
}



function getResults(response)
{

	startModel.getPiwikUsers(function(rows) {
						response.write(JSON.stringify(rows));
						//response.end();
						
					});
	
	startModel.getPiwikSites(function(rows) {
						response.write(JSON.stringify(rows));
						//response.end();
					});
	 
}


exports.index = index;