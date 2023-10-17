import express from 'express';

// Créez un routeur Express
const router = express.Router();

// Définissez vos routes ici
router.get('/', (req, res) => {
  res.json({ message: 'Ceci est une route de l\'API' });
});

// Exportez le routeur pour l'utiliser ailleurs
export default router;