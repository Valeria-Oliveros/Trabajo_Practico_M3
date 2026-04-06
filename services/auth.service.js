/*****************************************************
 * SERVICIO DE AUTENTICACIÓN 
 * - Maneja el hashing de contraseñas y comparación para autenticación
 * - hashPassword: Función para hashear una contraseña antes de guardarla
 * - comparePassword: Función para comparar una contraseña ingresada con su hash almacenado
*****************************************************/

import bcrypt from 'bcrypt';

export const hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
};

export const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};