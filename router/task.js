import express from 'express';

//Creation de la route
export const taskRouter = express.Router();


//importation du controleur 
import { getAllTasks } from '../controllers/task.js';

// Route pour afficher toutes les tâches
taskRouter.get('/tasks', (req, res) => {
    getAllTasks(req, res);
});
