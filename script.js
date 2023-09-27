var mysql      = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'youhou'
});

connection.connect();

connection.connect((err)=> {
    if (err) throw err
    console.log("base de donnée connecté");
});