// models/Curso.js
const mongoose = require('mongoose');

const cursoSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  imagen: String,
  horario: String,
  fechaInicio: Date,
  fechaFin: Date,
});

module.exports = mongoose.model('Curso', cursoSchema);
