import {connection} from '../db.js'

// faire afficher la liste des taches
export function getAllTasks(req, res) {
    const selection = "SELECT * FROM tasks";
    connection.query(selection, (err, result) => {
        if(err) {
            console.error("Essaie encore !!!", err);
            res.send('Erreur essaie encore')
        }
        console.log("liste des taches");
        console.log(result);
        res.send(result);
    })
  }
//Faire afficher la liste des utilisateurs
  export function getAlluser(req, res) {
    const selection = "SELECT * FROM user";
    connection.query(selection, (err, result) => {
        if(err) {
            console.error("Essaie encore !!!", err);
            res.send('Erreur essaie encore')
        }
        console.log("liste des utilisateurs");
        console.log(result);
        res.send(result);
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

  //Faire un edit pour mettre un tache a jour

  export function editAllTaskByNameUser() {
    const selection = "SELECT * FROM tasks WHERE owner_id = 1";
    connection.query(selection, (err, result) => {
      if(err) {
        console.error("Esssaie encore !!!!", err);
        result;
      }
      console.log('Tache mises à jour avec succès')
      console.log(result);
    })
  }

 // Fonction pour ajouter une tâche à un utilisateur par propriétaire
export function addTaskFromNameUser(taskId, taskDescription, taskComplete, ownerId) {
  // Requête SQL d'INSERT pour ajouter une tâche avec le propriétaire spécifié
  const selection = "INSERT INTO tasks (id, description, complete, owner_id) VALUES (?, ?, ?,?)";

  // Exécute la requête d'INSERT avec les paramètres appropriés
  connection.query(selection, [taskId, taskDescription, taskComplete, ownerId], (err, result) => {
      if (err) {
          console.error("Erreur lors de l'ajout de la tâche à l'utilisateur", err);
          return;
      }

      console.log(`Tâche ajoutée à l'utilisateur avec l'ID ${ownerId}`);
      console.log(result);
  });
}