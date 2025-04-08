// app.js
const express = require('express');
const cors = require('cors');
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
const courseRoutes = require('./routes/courseRoutes');
const authRoutes = require('./routes/authRoutes');
const contactRoutes = require('./routes/contactRoutes');

app.use('/api/courses', courseRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);

// Archivos estáticos si usas imágenes locales
app.use('/uploads', express.static('uploads'));

module.exports = app;
