const express = require('express');
const app = express();
const morgan = require('morgan');
const { conection } = require('../db/conection');

//Importando rutas
const userRoutes = require('../routes/user.routes');
const userCategoryRoutes = require('../routes/userCategory.routes');

//middleware para acceder a las variables de entorno
require('dotenv').config();
app.use(express.json());
app.use(morgan('dev'))

//Definiendo puerto
const port = process.env.PORT;

//definiendo rutas
app.use('/users', userRoutes);
app.use('/userCategory', userCategoryRoutes);

app.listen(port, () => {
  console.log(`Estamos escuchando el puerto ${port}`)
})

//conexion a la db
conection();
