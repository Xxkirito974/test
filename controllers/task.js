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
  export function getTaskFromNameUser(req, res) {
    const selection = "SELECT * FROM tasks INNER JOIN user ON user.id = tasks.owner_id";
    connection.query(selection, (err, result) => {
      if(err) {
        console.error("Essaie encore !!!", err);
        res.send('Essaie encore');
      }
      console.log("Liste de tache par user");
      console.log(result);
      res.send(result);
    })
  }

  //Faire un edit pour mettre un tache a jour

  export function editAllTaskByNameUser(req, res) {
    const selection = "SELECT * FROM tasks WHERE owner_id = 1";
    connection.query(selection, (err, result) => {
      if(err) {
        console.error("Esssaie encore !!!!", err);
        res.send('Essaie encore');
      }
      console.log('Tache mises à jour avec succès')
      console.log(result);
      res.send(result)
    })
  }

  //Faire deleteTaskById
  export function deleteTaskByID(id) {
    const selection = "DELETE FROM tasks WHERE id = ?";
    connection.query(selection, [id], (err, result) => {
      if(err) {
        console.error("Essaie encore !!!", err);
      }
      console.log("task with id "+id+" deleted")
    });
  }

  //Faire postTaskById
  export function postTaskById(req, res) {

    try {
      //recuperation de l'id de la teche dans l'url
      const id = req.params.id 
      const description = req.body.description
      const completed = req.body.completed

      console.log("Allé yes")
      //update tasks table from id
      const selection = "UPDATE FROM tasks SET description = ?, completed = ? WHERE id = ?"
      connection.query(selection, [description, completed, id], (err, result) => {
        if(err) throw err

        //s'il y a pas d'erreur on renvoi dans la réponse
        res.status(201).send(result)
        console.log(result)
      });
    } catch (err) {
      res.send(err)
    }
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