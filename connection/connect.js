const mysql = require('mysql');
const config = require('config');

const con = mysql.createConnection({
    host: config.get('MYSQL_CONNECTION').HOST,
    user: config.get('MYSQL_CONNECTION').USER,
    password: '',
    database: "MySqlTask"
});

con.connect((err) => {
    if (err) throw err;
    console.log("DATABASE CONNECTED SUCCESSFULLY");
});

module.exports = con;