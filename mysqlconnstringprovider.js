/**
 * Created by nazab on 1/6/2017.
 */
var mysql = require('mysql');
var mysqlConnectionString = require('./mysqlConnctionString');

var mysqlConnectionStringProvider = {

//----- Establish connection with WiDUCTOne
    getMysqlConnectionMain : function () {
        var connection = mysql.createConnection(mysqlConnectionString.wiductone);
        connection.connect(function (err) {
            if (err) { throw err; }
            console.log('Connection with WiDUCTOne Successful');
        });
        return connection;
    },
    closeMysqlConnection : function (currentConnection) {
        if(currentConnection){
            currentConnection.end(function(err){
                if(err){throw err;}
                console.log('Connection closed successfully.')
            })
        }
    }
};
module.exports = mysqlConnectionStringProvider;