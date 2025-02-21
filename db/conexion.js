
const mysql = require('mysql2');

const db_con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'db_prueba'
});

db_con.connect((err) => {
  if (err) throw err;

  console.log('Database Connected!');
});

module.exports = db_con;