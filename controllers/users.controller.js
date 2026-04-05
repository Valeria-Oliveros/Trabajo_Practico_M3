import jwt from 'jsonwebtoken';
import { hashPassword, comparePassword } from '../services/auth.service.js';
import { readJSON, writeJSON } from '../services/jsonService.js';

export const registerUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: "⚠️Faltan campos requeridos" });
        }
        const users = readJSON('users');
        const existingUser = users.find(u => u.username.toLowerCase() === username.toLowerCase());
        if (existingUser) {
            return res.status(400).json({ message: "Usuario ya existe ❌" });
        }
        const hashedPassword = await hashPassword(password);
        users.push({ username, password: hashedPassword });
        writeJSON('users', users);
        res.json({ message: "Usuario registrado exitosamente ✨" });
    } catch (error) {
        res.status(500).json({ message: "Error al registrar usuario ❌" });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;    

        const users = readJSON('users');
        const user = users.find(u => u.username.toLowerCase() === username.toLowerCase());

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
