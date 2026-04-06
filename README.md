# 🍽️ RestAdmin – API RESTful de Gestión de Pedidos

Proyecto integrador desarrollado en Node.js que implementa una **API REST para la administración de pedidos de un restaurante** 🌟, con autenticación JWT, contraseñas hasheadas y despliegue en la nube con Render ☁️.

## 👩‍💻 Integrante: Valeria Oliveros

---

## 🌐 URL de la API desplegada

```
https://trabajo-practico-m3.onrender.com
```

> ⚠️ La instancia gratuita de Render puede tardar hasta 50 segundos en responder si estuvo inactiva.

---

## 🗂️ Estructura del proyecto

```
backend/
│
├── controllers/
│   ├── items.controller.js     # Lógica de pedidos (CRUD)
│   └── users.controller.js     # Lógica de registro y login
│
├── middlewares/
│   └── auth.middleware.js      # Validación de token JWT
│
├── models/
│   ├── data.json               # Persistencia de pedidos
│   └── users.json              # Persistencia de usuarios
│
├── routers/
│   ├── items.routes.js         # Rutas de /items
│   └── users.routes.js         # Rutas de /users
│
├── services/
│   ├── auth.service.js         # Hash y comparación de contraseñas
│   └── jsonService.js          # Lectura y escritura de archivos JSON
│
├── public/
│   └── index.html              # Frontend estático
│
├── index.js                    # Entrada principal del servidor
├── .env                        # Variables de entorno (no commiteado)
├── .gitignore
└── package.json
```

---

## ✅ Requisitos previos

Antes de comenzar, asegurate de tener instalado:

* Node.js (versión 18 o superior recomendada)
* npm (incluido con Node.js)

Podés verificarlo con:

```bash
node -v
npm -v
```

---

## 🚀 Instalación y configuración

1. Cloná este repositorio:

```bash
git clone https://github.com/Valeria-Oliveros/Trabajo_Practico_M3.git
```

2. Entrá a la carpeta del proyecto:

```bash
cd Trabajo_Practico_M3/backend
```

3. Instalá las dependencias:

```bash
npm install
```

4. Creá un archivo `.env` en la raíz de la carpeta `backend/` con el siguiente contenido:

```env
PORT=5000
SECRET=tu_clave_secreta_aqui
```

---

## ▶️ Ejecución del proyecto

En la terminal, dentro de la carpeta `backend/`:

```bash
node index.js
```

Salida esperada:

```
Servidor corriendo en puerto 5000
```

El frontend estático estará disponible en:

```
http://localhost:5000
```

---

## 📡 Endpoints disponibles

### 👤 Usuarios

| Método | Ruta               | Descripción                            |
|--------|--------------------|----------------------------------------|
| POST   | /users/register    | Registra un nuevo usuario              |
| POST   | /users/login       | Inicia sesión y devuelve token JWT     |
| GET    | /users/profile     | Devuelve datos del usuario autenticado |

#### 📝 Ejemplo – Registro

```json
POST /users/register
{
  "username": "valeria",
  "password": "miPassword123"
}
```

#### 📝 Ejemplo – Login

```json
POST /users/login
{
  "username": "valeria",
  "password": "miPassword123"
}
```

Respuesta:

```json
{
  "message": "Inicio de sesión exitoso ✨",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

### 🍴 Pedidos

> Todas las rutas de `/items` requieren el siguiente header 🔐:
> ```
> Authorization: Bearer <token>
> ```

| Método | Ruta          | Descripción                    |
|--------|---------------|--------------------------------|
| GET    | /items        | Lista todos los pedidos        |
| POST   | /items        | Agrega un nuevo pedido         |
| PUT    | /items/:id    | Edita un pedido existente      |
| DELETE | /items/:id    | Elimina un pedido              |

#### 📝 Ejemplo – Crear pedido

```json
POST /items
{
  "nombre": "Sushi Fantasia",
  "cantidad": 2
}
```

Respuesta:

```json
{
  "message": "Ítem creado exitosamente ✨",
  "item": {
    "id": 1775430751489,
    "nombre": "Sushi Fantasia",
    "cantidad": 2
  }
}
```

#### 📝 Ejemplo – Editar pedido

```json
PUT /items/1775430751489
{
  "nombre": "Sushi Fantasia",
  "cantidad": 3
}
```

---

## 🔒 Seguridad implementada

* Contraseñas hasheadas con **bcrypt**
* Autenticación con **JWT** (tokens con expiración de 1 hora)
* Middleware de validación en todas las rutas protegidas
* Búsquedas **case insensitive** para usuarios
* Variables sensibles manejadas con **.env**

---

## 📦 Dependencias utilizadas

| Paquete         | Versión  | Uso                              |
|-----------------|----------|----------------------------------|
| express         | ^5.2.1   | Framework del servidor           |
| jsonwebtoken    | ^9.0.3   | Generación y validación de JWT   |
| bcrypt          | ^6.0.0   | Hash de contraseñas              |
| dotenv          | ^17.4.0  | Variables de entorno             |
| cors            | ^2.8.6   | Habilitación de CORS             |

---

## 💜 Notas finales

* Los datos se persisten en archivos JSON locales (`data.json` y `users.json`).
* El frontend estático se sirve desde la carpeta `public/` y consume la API directamente.
* Para probar los endpoints se recomienda usar **Postman**.
* El archivo `.env` está incluido en `.gitignore` y no se sube al repositorio.