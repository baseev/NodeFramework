var utils = require('./../../utils/utils');

function getPiwikUsers(callback)
{
	var pool = utils.getMasterDbConnection();
	pool.acquire(function(err, db) {
        if (err) {
            console.log("CONNECTION error: " + err);
        }
        db.query().select('*').from('piwik_user').execute(function(err, rows, columns) {
            pool.release(db);
            if (err) {
               console.log("QUERY ERROR: " + err);
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
               console.log("QUERY ERROR: " + err);
            }
            callback(rows);
        });
    });
}


exports.getPiwikUsers = getPiwikUsers;
exports.getPiwikSites = getPiwikSites;