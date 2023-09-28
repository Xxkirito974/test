//Connexion a la base de données

import mysql from 'mysql';
let connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'youhou',
});

connection.connect((err)=>{
    if(err) throw err
    console.log("ok")
   });
 