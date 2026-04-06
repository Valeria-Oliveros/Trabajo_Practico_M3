/*****************************************************
 * ROUTER DE USUARIOS 
 * - Define las rutas para el registro, login y perfil de usuarios
 * - POST /users/register: Registra un nuevo usuario
 * - POST /users/login: Inicia sesión y devuelve un token JWT
 * - GET /users/profile: Ruta protegida que devuelve información del usuario autenticado
*****************************************************/

import express from 'express';
import { registerUser, loginUser } from '../controllers/users.controller.js';
import { verifyToken } from '../middlewares/auth.middleware.js';

const router = express.Router();

// Ruta de ejemplo para usuarios
router.get('/', (req, res) => {
  res.send("Ruta de usuarios funcionando 🚀");
});

router.post('/register', registerUser);
router.post('/login', loginUser);

router.get('/profile', verifyToken, (req, res) => {
  res.json({ 
    message: "Accediste a una ruta protegida 🔐",
    user: req.user
  });
});

export default router;