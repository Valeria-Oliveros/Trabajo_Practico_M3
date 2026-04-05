import { readJSON, writeJSON } from '../services/jsonService.js';

const dataFile = 'data';

export const getItems = (req, res) => {
    try {
        const data = readJSON(dataFile);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los ítems ❌" });
    }
};

export const createItem = (req, res) => {
    try {
        const { nombre, cantidad } = req.body;
        if (!nombre || !cantidad) {
            return res.status(400).json({ message: "⚠️Faltan campos requeridos" });
        }
        
        const data = readJSON(dataFile);
        const newItem = { id: Date.now(), ...req.body };
        data.push(newItem);
        writeJSON('data', data);
        res.json({ message: "Ítem creado exitosamente ✨", item: newItem });
    } catch (error) {
        res.status(500).json({ message: "Error al crear el ítem ❌" });

    }
};

export const updateItem = (req, res) => {
    try {
        const { id } = req.params;
        const data = readJSON(dataFile);
        const itemIndex = data.findIndex(item => item.id == id);

        if (itemIndex === -1) {
            return res.status(404).json({ message: "Ítem no encontrado ❌" });
        }
        data[itemIndex] = { ...data[itemIndex], ...req.body };
        writeJSON(dataFile, data);
        res.json({ message: "Ítem actualizado exitosamente ✨" });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el ítem ❌" });
    }
};

export const deleteItem = (req, res) => {
    try {
        const { id } = req.params;
        const data = readJSON(dataFile);

        const filteredData = data.filter(item => item.id != id);
        if (filteredData.length === data.length) {
            return res.status(404).json({ message: "Ítem no encontrado ❌" });
        }

        writeJSON(dataFile, filteredData);
        res.json({ message: "Ítem eliminado exitosamente 🗑️" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el ítem ❌" });
    }
};
