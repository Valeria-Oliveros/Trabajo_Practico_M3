import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import usersRoutes from './routers/users.routes.js';
import itemsRoutes from './routers/items.routes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/users', usersRoutes);
app.use('/items', itemsRoutes);

app.get('/', (req, res) => {
  res.send("API funcionando 🚀");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Servidor corriendo en puerto " + process.env.PORT);
});