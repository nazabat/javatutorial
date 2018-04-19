/**
 * Created by nazab on 27/7/2017.
 */
var mysql = require('mysql');

var mysqlConnctionString = {
    wiductone: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'wiductschema',
        port: 3306
    },
    production: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'productms',
        port: 3306
    }
};


var mysqlConnectionStringProvider = {
        getMysqlConnectionMain : function () {
            var connection = mysql.createConnection(mysqlConnctionString.wiductone);
            connection.connect(function (err) {
                if (err) { throw err; }
                console.log('Connection with WiDUCTOne is Successful');
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

var DataObjectModule  = {
    getData : function(){
     var connection =  mysqlConnectionStringProvider.getMysqlConnectionMain();
     var qString = "SELECT * FROM wiductone LIMIT 50";
     var HomeData = [];
     if(connection){
         connection.query(qString, function(err, rows, fields){
             rows.forEach(function (row){
                 HomeData.push(row);
                 console.log(row);
             })
         })
     }
        mysqlConnectionStringProvider.closeMysqlConnection(connection);
    }
};

DataObjectModule.getData();