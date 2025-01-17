// Question: Quelle est la différence entre un contrôleur et une route ?
// Réponse: Une route définit les points d'entrée de l'application et associe les requêtes HTTP à des fonctions spécifiques. Un contrôleur, en revanche, contient la logique métier qui est exécutée lorsque ces points d'entrée sont atteints. Les routes dirigent les requêtes vers les contrôleurs appropriés.
// Question : Pourquoi séparer la logique métier des routes ?
// Réponse : Séparer la logique métier des routes permet de maintenir un code propre et organisé. Cela facilite la maintenance, les tests et la réutilisation du code. En isolant la logique métier dans des contrôleurs, on peut également mieux structurer l'application et suivre le principe de séparation des préoccupations.

const { ObjectId } = require('mongodb');
const db = require('../config/db');
const mongoService = require('../services/mongoService');
const redisService = require('../services/redisService');

async function createCourse(req, res) {
  // TODO: Implémenter la création d'un cours
  // Utiliser les services pour la logique réutilisable
  try {
    const course = req.body;
    const result = await mongoService.insertOne('courses', course);
    await redisService.cacheData(`course:${result.insertedId}`, course, 3600);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create course' });
  }
}

async function getCourse(req, res) {
  try {
    const id = req.params.id;
    let course = await redisService.getData(`course:${id}`);
    if (!course) {
      course = await mongoService.findOneById('courses', id);
      if (course) {
        await redisService.cacheData(`course:${id}`, course, 3600);
      }
    }
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get course' });
  }
}

async function getCourseStats(req, res) {
  try {
    console.log("test")
    const stats = await mongoService.getCourseStats();
    res.status(200).json(stats);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get course stats' });
  }
}

// Export des contrôleurs
module.exports = {
  // TODO: Exporter les fonctions du contrôleur
  createCourse,
  getCourse,
  getCourseStats
};