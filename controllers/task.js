import {connection} from '../db.js'

// faire afficher la liste des taches
export function getAllTasks() {
    const selection = "SELECT * FROM tasks";
    connection.query(selection, (err, result) => {
        if(err) {
            console.error("Essaie encore !!!", err);
            return;
        }
        console.log("liste des taches");
        console.log(result);
    })
  }
//Faire afficher la liste des utilisateurs
  export function getAlluser() {
    const selection = "SELECT * FROM user";
    connection.query(selection, (err, result) => {
        if(err) {
            console.error("Essaie encore !!!", err);
            return;
        }
        console.log("liste des utilisateurs");
        console.log(result);
    })
  }

  
  //Faire afficher le nom de l'utilisateur avec les taches
  export function getTaskFromNameUser() {
    const selection = "SELECT * FROM tasks INNER JOIN user ON user.id = tasks.owner_id";
    connection.query(selection, (err, result) => {
      if(err) {
        console.error("Essaie encore !!!", err);
        return;
      }
      console.log("Liste de tache par user");
      console.log(result);
    })
  }
