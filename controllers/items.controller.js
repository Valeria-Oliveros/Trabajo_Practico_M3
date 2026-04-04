import fs from 'fs';

const getData = () => {
    const data = fs.readFileSync("models/data.json");
    return JSON.parse(data);
};

const saveData = (data) => {
    fs.writeFileSync("models/data.json", JSON.stringify(data, null, 2));
};

export const getItems = (req, res) => {
    const data = getData();
    res.json(data);
};

export const createItem = (req, res) => {
    const data = getData();
    const newItem = {
        id: Date.now(),
        ...req.body
    };

    data.push(newItem);
    saveData(data);

    res.json({ message: "Ítem creado exitosamente ✨", item: newItem });
};

export const updateItem = (req, res) => {
    const { id } = req.params;
    const data = getData();

    const updatedItem = data.map(item =>
        item.id == id ? { ...item, ...req.body } : item
    );

    saveData(updatedItem);

    res.json({ message: "Ítem actualizado exitosamente ✨" });
};

export const deleteItem = (req, res) => {
    const { id } = req.params;
    const data = getData();

    const filteredData = data.filter(item => item.id != id);
    saveData(filteredData);
    
    res.json({ message: "Ítem eliminado exitosamente 🗑️" });
};
