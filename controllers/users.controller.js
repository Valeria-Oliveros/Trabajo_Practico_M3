import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { hashPassword, comparePassword } from '../services/auth.service.js';

const users = [];

export const registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "⚠️Faltan campos requeridos" });
        }

        const hashedPassword = await hashPassword(password);

        users.push({
            username,
            password: hashedPassword        
        });

        res.json({ message: "Usuario registrado exitosamente ✨" });

    } catch (error) {
        res.status(500).json({ message: "Error al registrar usuario ❌" });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;    

        const user = users.find(u => u.username === username);

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado ❌" });
        }

        const isValid = await comparePassword(password, user.password);

        if (!isValid) {
            return res.status(401).json({ message: "Contraseña incorrecta ❌" });
        }

        const token = jwt.sign(
            { username },
            process.env.SECRET,
            { expiresIn: '1h' }
        );

        res.json({ 
            message: "Inicio de sesión exitoso ✨",
            token
        });
    } catch (error) {
        res.status(500).json({ message: "Error al iniciar sesión ❌" });
    }
};
