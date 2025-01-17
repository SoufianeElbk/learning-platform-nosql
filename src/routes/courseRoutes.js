// Question: Pourquoi séparer les routes dans différents fichiers ?
// Réponse : Séparer les routes dans différents fichiers permet de mieux organiser le code, de le rendre plus lisible et maintenable. Cela facilite également la gestion des routes en les regroupant par fonctionnalité ou module, ce qui permet de mieux structurer l'application.
// Question : Comment organiser les routes de manière cohérente ?
// Réponse: Pour organiser les routes de manière cohérente, il est recommandé de les regrouper par fonctionnalité ou module. Par exemple, toutes les routes liées aux cours peuvent être placées dans un fichier `courseRoutes.js`, tandis que les routes liées aux utilisateurs peuvent être placées dans un fichier `userRoutes.js`. Il est également utile de suivre une convention de nommage claire et de documenter les routes pour faciliter la compréhension et la maintenance du code.

const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Routes pour les cours
router.post('/', courseController.createCourse);
router.get('/stats', courseController.getCourseStats);
router.get('/:id', courseController.getCourse);

module.exports = router;