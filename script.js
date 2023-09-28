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
   getAllTasks();
   getAlluser();
   getTaskFromNameUser();
  });

  function getAllTasks() {
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

  function getAlluser() {
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

  
  //getTaskFromNameUser 
  function getTaskFromNameUser() {
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