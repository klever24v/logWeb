import express from 'express';
import morgan from 'morgan';
import winston from 'winston';
import path from "path";
import { fileURLToPath } from "url";

import indexRouter from './routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("views", path.join(__dirname, "views")); // Carpeta de vistas

app.use(express.static(path.join(__dirname, 'public'))); // Archivos estáticos
app.use(indexRouter);

// Logger de peticiones HTTP
app.use(morgan('combined', {
  stream: { write: (message) => logger.info(message.trim()) }
}));

// Logger personalizado con Winston
export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'logs/app.log' }),
    new winston.transports.File({
      filename: 'logs/home.log',
      level: 'info',
      filter: (info) => info.page === 'home'
    })
  ]
});

// Iniciar servidor
app.listen(3000, () => {
  logger.info('La aplicación está corriendo en el puerto 3000');
  console.log('Visita http://localhost:3000 en tu navegador');
});
