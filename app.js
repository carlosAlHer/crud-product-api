const express = require('express');
const  db_con = require('./db/conexion.js');
const app = express();
const port = 3000;

// Dar formato a los datos que lleguen en el body(del req)
app.use(express.json());//convierte en json los datos que llegan con un content type json 
app.use(express.urlencoded({extended: true}))//convierte en json los datos que lleguen en formato form-urlencode

const categRoutes = require('./routing/categories.js');
const prdRoutes = require('./routing/products.js');
app.use('/api/categ', categRoutes);
app.use('/api/prd', prdRoutes);
app.listen(port, ()=> console.log(`Dolphin app listening on port ${port}!`));

