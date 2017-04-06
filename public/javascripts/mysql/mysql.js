/**
 * Created by lirui on 2017/4/3.
 */

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '199011081108',
    port: '3306',
    database: 'test'
});

connection.connect();

var sql = 'SELECT * FROM web';
connection.query(sql, function (err, result) {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log(result);
});

connection.end();