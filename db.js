//Connexion a la base de données
import mysql from 'mysql';
export let connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'youhou',
});
