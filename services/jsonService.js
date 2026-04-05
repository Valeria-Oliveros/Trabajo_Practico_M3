import fs from 'fs';
import path from 'path';

export const readJSON = (fileName) => {
    try {
        const filePath = path.resolve(`models/${fileName}.json`);
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error("⚠️ Error leyendo el archivo JSON", error);
        return [];
    }
};

export const writeJSON = (fileName, data) => {
    const filePath = path.resolve(`models/${fileName}.json`);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};