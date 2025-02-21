const db_con = require('../db/conexion.js');

let Document = function (document) {
    this.id = document.id;
    this.name = document.name;
    this.description = document.description;
    this.price = document.price;
    this.category_id = document.category_id;
}

Document.getById = ({id}, result) => {
    const callback = (error, res) => (error)
        ? result(error, null)
        : result(null, res[0]);

    db_con.query('SELECT * FROM productos WHERE id = ?', id, callback);
}

Document.getAll = (result) => {
    const callback = (error, res) => (error)
        ? result(error, null)
        : result(null, res);

    db_con.query('SELECT * FROM productos', callback);
   
}

Document.store = (newDocument, result) => {
    const callback = (error, res) => (error) 
        ? result(error, null)
        : result(null, res);

    db_con.query('INSERT INTO productos set ?', newDocument, callback);
}

Document.update = ({ id, name, description, price, category_id }, result) => {
  
    const callback = (error, res) => (error)
        ? result(error, null)
        : result(null, null);

    db_con.query(
        'UPDATE productos SET name = ?, description = ?, price = ?, category_id = ?  WHERE id = ?', 
        [name, description, price, category_id, id], 
        callback
    );
}

Document.delete = (id, result) => {
    const callback =  (error, res) => (error)
        ? result(error, null)
        : result(null, res);

    db_con.query('DELETE FROM productos WHERE id = ?', [id], callback);
}

module.exports = Document;
