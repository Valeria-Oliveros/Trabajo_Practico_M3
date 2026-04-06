/*****************************************************
 * MIDDLEWARE DE AUTENTICACIÓN 
 * - Verifica el token JWT en las solicitudes protegidas
 * - verifyToken: Middleware que valida el token y permite acceso a rutas protegidas
*****************************************************/

import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: "Token no proporcionado ❌" });
    }

    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Token inválido ❌" });
    }
};