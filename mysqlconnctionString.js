/**
 * Created by Nazabat on 1/6/2017.
 */

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

module.exports = mysqlConnctionString;