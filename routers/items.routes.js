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