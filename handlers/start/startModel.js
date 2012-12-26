var utils = require('./../../utils/utils');
var className_ = "startModel";


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



function getType(callback)
{
	var pool = utils.getMasterDbConnection();
	pool.acquire(function(err, db) {
        if (err) {
           	utils.LOG.error("startModel / getPetsGeneralInfo / " + err);
        }
        db.query("SELECT t.id, t.name FROM type t WHERE is_deleted = 0").execute(function(err, rows, columns) {
            pool.release(db);
            if (err) {
               	utils.LOG.error("startModel / getPetsGeneralInfo / Query error : " + err);
            }
            callback(rows);
        });
    });
}


function getPetsType(callback)
{
	var pool = utils.getMasterDbConnection();
	pool.acquire(function(err, db) {
        if (err) {
           	utils.LOG.error("startModel / getPetsGeneralInfo / " + err);
        }
        db.query("SELECT pt.id, pt.name FROM pets_type pt WHERE is_deleted = 0").execute(function(err, rows, columns) {
            pool.release(db);
            if (err) {
               	utils.LOG.error("startModel / getPetsGeneralInfo / Query error : " + err);
            }
            callback(rows);
        });
    });
}



function getPetsSubType(callback)
{
	var pool = utils.getMasterDbConnection();
	pool.acquire(function(err, db) {
        if (err) {
           	utils.LOG.error("startModel / getPetsGeneralInfo / " + err);
        }
        db.query("SELECT pst.id, pst.name FROM pets_sub_type pst WHERE is_deleted = 0").execute(function(err, rows, columns) {
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
startModel.prototype.getPetsGeneralInfo = getPetsGeneralInfo;
startModel.prototype.getType 			= getType;
startModel.prototype.getPetsType 		= getPetsType;
startModel.prototype.getPetsSubType 	= getPetsSubType;

exports.Model = startModel;