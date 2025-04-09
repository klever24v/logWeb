import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { logger } from '../app.js';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ruta principal (Home)
router.get('/', (req, res) => {
  logger.info('Alguien visitó la página principal', { page: 'home' });

  res.sendFile(path.join(__dirname, '../views/home.html'));
});

// Ruta para registrar un log manualmente
router.post('/log', (req, res) => {
  logger.info('Usuario hizo clic en el botón de log', { page: 'home' });
  res.send('Log registrado');
});

export default router;
