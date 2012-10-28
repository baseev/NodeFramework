var path = require("path");
var dust = require('./../../lib/dust');
var Mustache = require('./../../../mustache');
var utils = require('./../../utils/utils');
var startModel = require('./startModel');
var Q = require('q');
var async = require('async');

function index(request, response) {

	console.log("Inside index method...");
  	var path 	= __dirname+"/templates/";
	var _model 	= new startModel.Model();

	async.parallel({
						"template": function(callback){
					    				utils.getContents(path, "index", "dust", function(err, template){
					    						callback(err, template);
					    					}
					    				);
					    		},
					    		
					    "pgi": 	function(callback){				
							    			_model.getPetsGeneralInfo(function(rows) {
												callback(null, rows);
											}
										);
					    		},
					    		
					    "PiwikSites": 	function(callback){
											_model.getPiwikSites(function(rows) {
												callback(null, rows);
											}
										);
					    		},
					    
					},
					
					function(err, results) {
						//utils.debug(JSON.stringify(err));
						dust.loadSource(dust.compile(results.template, "index"));
						//dust.compile(results.template, "one.dust")
						//render dust template
						//utils.debug(JSON.stringify(dust.cache));
						dust.render("index", results, function(err, output) {
								response.write(output);
								response.end();
							}
						);
						
						
					});	
}


//create a global obect
startController =  function() {};
startController.prototype.index = index;

exports.Controller = startController;