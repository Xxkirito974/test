//connexion avec la base de données
//Activer les fonctions dans la connexion 
// import mysql from 'mysql';
// let connection = mysql.createConnection({
//     host : 'localhost',
//     user : 'root',
//     password : '',
//     database : 'youhou',
// });
import {connection} from '../node js/db.js'
import {getAllTasks, getAlluser, getTaskFromNameUser, editAllTaskByNameUser, addTaskFromNameUser} from './controllers/task.js'

 connection.connect((err)=>{
   if(err) throw err
   console.log("ok")
   getAllTasks();
   getAlluser();
   getTaskFromNameUser();
   editAllTaskByNameUser();
   addTaskFromNameUser(2, "repos", 1, 1);
  });

// faire afficher la liste des taches
  // function getAllTasks() {
  //   const selection = "SELECT * FROM tasks";
  //   connection.query(selection, (err, result) => {
  //       if(err) {
  //           console.error("Essaie encore !!!", err);
  //           return;
  //       }
  //       console.log("liste des taches");
  //       console.log(result);
  //   })
  // }
//Faire afficher la liste des utilisateurs
  // function getAlluser() {
  //   const selection = "SELECT * FROM user";
  //   connection.query(selection, (err, result) => {
  //       if(err) {
  //           console.error("Essaie encore !!!", err);
  //           return;
  //       }
  //       console.log("liste des utilisateurs");
  //       console.log(result);
  //   })
  // }

  
  //Faire afficher le nom de l'utilisateur avec les taches
  // function getTaskFromNameUser() {
  //   const selection = "SELECT * FROM tasks INNER JOIN user ON user.id = tasks.owner_id";
  //   connection.query(selection, (err, result) => {
  //     if(err) {
  //       console.error("Essaie encore !!!", err);
  //       return;
  //     }
  //     console.log("Liste de tache par user");
  //     console.log(result);
  //   })
  // }

  