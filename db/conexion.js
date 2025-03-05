
const mysql = require('mysql2/promise');
require('dotenv').config();// load var enviroment

const db_con = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,  // Número máximo de conexiones simultáneas
  queueLimit: 0
});

//verificar conexion
(async () => {
  try {

    const connection = await db_con.getConnection();
    console.log("Conectado a MySQl");
    connection.release();//se libera conexion

  } catch (error) {

    console.log("Error al conectar a la DB:", error.message);
  }
})();


module.exports = db_con;