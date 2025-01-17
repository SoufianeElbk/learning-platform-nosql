const { ObjectId } = require('mongodb');
const mongoService = require('../services/mongoService');

async function createStudent(req, res) {
  try {
    const student = req.body;
    const result = await mongoService.insertOne('students', student);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create student' });
  }
}

async function getStudent(req, res) {
  try { 
    const studentId = req.params.id;
    const student = await mongoService.findOneById('students', studentId);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get student' });
  }
}

// Export des contrôleurs
module.exports = {
  createStudent,
  getStudent
};