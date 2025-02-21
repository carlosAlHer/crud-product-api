const db_con = require('../db/conexion.js');

let Document = function (document) {
    this.id = document.id;
    this.name = document.name;
}

Document.getById = ({id}, result) => {
    const callback = (error, res) => (error)
        ? result(error, null)
        : result(null, res[0]);

    db_con.query('SELECT * FROM categorias WHERE id = ?', id, callback);
}

Document.getAll = (result) => {
    const callback = (error, res) => (error)
        ? result(error, null)
        : result(null, res);

    db_con.query('SELECT * FROM categorias', callback);
   
}

Document.store = (newDocument, result) => {
    
    const callback = (error, res) => (error) 
        ? result(error, null)
        : result(null, res);

    db_con.query('INSERT INTO categorias set ?', newDocument, callback);
}

Document.update = ({ id, name }, result) => {
    const callback = (error, res) => (error)
        ? result(error, null)
        : result(null, null);

    db_con.query(
        'UPDATE categorias SET name = ? WHERE id = ?', 
        [name, id], 
        callback
    );
}

Document.delete = (id, result) => {
    const callback =  (error, res) => (error)
        ? result(error, null)
        : result(null, res);

   db_con.query('DELETE FROM categorias WHERE id = ?', [id], callback);
}

module.exports = Document;
