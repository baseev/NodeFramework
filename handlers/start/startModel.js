var utils = require('./../../utils/utils');
var className_ = "startModel";

function getPiwikUsers(callback)
{
	var pool = utils.getMasterDbConnection();
	pool.acquire(function(err, db) {
        if (err) {
            utils.LOG.error("startModel / getPiwikUsers / " + err);
        }
        db.query().select('*').from('piwik_user').execute(function(err, rows, columns) {
            pool.release(db);
            if (err) {
               utils.LOG.error("startModel / getPiwikUsers / Query error : " +  err);
            }
            callback(rows);
        });
    });
}



function getPiwikSites(callback)
{
	var pool = utils.getMasterDbConnection();
	pool.acquire(function(err, db) {
        if (err) {
            console.log("CONNECTION error: " + err);
        }
        db.query().select('*').from('piwik_site').execute(function(err, rows, columns) {
            pool.release(db);
            if (err) {
               utils.LOG.error("startModel / getPiwikUsers / Query error : " + err);
            }
            callback(rows);
        });
    });
}


function getPetsGeneralInfo(callback)
{
	var pool = utils.getMasterDbConnection();
	pool.acquire(function(err, db) {
        if (err) {
           	utils.LOG.error("startModel / getPetsGeneralInfo / " + err);
        }
        db.query("SELECT pgi.id, pt.name, pgi.disese_name, pgi.symptoms, pgi.medicine_info, pgi.other_info FROM pets_general_info pgi JOIN pets_type pt ON pgi.pets_type_id = pt.id where pgi.is_deleted = 0 and pt.is_deleted = 0").execute(function(err, rows, columns) {
            pool.release(db);
            if (err) {
               	utils.LOG.error("startModel / getPetsGeneralInfo / Query error : " + err);
            }
            callback(rows);
        });
    });
}


//create a global obect
startModel 								=  function() {}
startModel.prototype.getPiwikUsers 		= getPiwikUsers;
startModel.prototype.getPiwikSites 		= getPiwikSites;
startModel.prototype.getPetsGeneralInfo = getPetsGeneralInfo;

exports.Model = startModel;