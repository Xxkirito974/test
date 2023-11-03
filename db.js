//Connexion a la base de données
// import mysql from 'mysql2';
// export let connection = mysql.createConnection({
//     host : 'localhost',
//     user : 'root',
//     password : '',
//     database : 'youhou',
// });

//connexion à la base de donnée avec sequelize 
import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize('youhou', 'root', '', { 
    host: 'localhost',
    dialect: 'mysql'
});