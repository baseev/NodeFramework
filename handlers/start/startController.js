var path = require("path");
var dust = require('./../../lib/dust');
var async = require('async');
var Logger = require('bunyan');
var utils = require('./../../utils/utils');
var constants = require("./../../utils/constants");
var startModel = require('./startModel');
var name = "startController";


function index(request, response) {

	utils.LOG.info(name+" / index ");
	
  	var path 	= __dirname+"/templates/";
	var _model 	= new startModel.Model();

	async.parallel({
						"main": function(callback){
					    				utils.getContents(constants.DUST_MAIN_TEMPLATE, "main", "dust", function(err, template){
					    						callback(err, template);
					    					}
					    				);
					    		},
					    		
					    "index_template": function(callback){
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
						utils.LOG.error(name+" / index / error / "+JSON.stringify(err));
						utils.LOG.info(name+" / index / Success / "+JSON.stringify(results));
						
						
						dust.loadSource(dust.compile(results.index_template, "partial"));
						dust.loadSource(dust.compile(results.main, "index"));
						//render dust template
						//utils.debug(JSON.stringify(dust.cache));
						dust.render("index", results, function(err, output) {
								utils.LOG.error(name+" / index / dust error / "+JSON.stringify(err));
								utils.LOG.info(name+" / index / dust output / "+JSON.stringify(output));
								
				
								response.writeHead(200, constants.HTML_RESPONSE_HEADERS);
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