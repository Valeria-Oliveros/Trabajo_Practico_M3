/*****************************************************
 * ROUTER DE ITEMS 
 * - Define las rutas para las operaciones CRUD de ítems
 * - Todas las rutas están protegidas por el middleware de autenticación
 * - GET /items: Obtiene todos los ítems
 * - POST /items: Crea un nuevo ítem
 * - PUT /items/:id: Actualiza un ítem existente por ID
 * - DELETE /items/:id: Elimina un ítem por ID
*****************************************************/

import express from 'express';
import { verifyToken } from '../middlewares/auth.middleware.js';
import {
    getItems,
    createItem,
    updateItem,
    deleteItem  
} from '../controllers/items.controller.js';

const router = express.Router();

router.get('/', verifyToken, getItems);
router.post('/', verifyToken, createItem);
router.put('/:id', verifyToken, updateItem);
router.delete('/:id', verifyToken, deleteItem);

export default router;