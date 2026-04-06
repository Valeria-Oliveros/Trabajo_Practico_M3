/*****************************************************
 * Título: Trabajo Práctico Integrador - Modulo 3
 * Programa: Sistema de administración de pedidos para un restaurante.
 * Autor: Valeria Oliveros
 * Fecha: 01/04/2026
 * Intitución: Ada ITW
 *****************************************************/

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import usersRoutes from './routers/users.routes.js';
import itemsRoutes from './routers/items.routes.js';

dotenv.config();

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/users', usersRoutes);
app.use('/items', itemsRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log("Servidor corriendo en puerto " + process.env.PORT);
});