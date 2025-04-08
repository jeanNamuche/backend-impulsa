// routes/cursos.js
const express = require('express');
const router = express.Router();
const Curso = require('../models/Curso');

// Obtener todos los cursos
router.get('/', async (req, res) => {
  const cursos = await Curso.find();
  res.json(cursos);
});

// Crear un nuevo curso
router.post('/', async (req, res) => {
  const nuevoCurso = new Curso(req.body);
  await nuevoCurso.save();
  res.status(201).json(nuevoCurso);
});

module.exports = router;
