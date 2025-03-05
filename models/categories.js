const db_con = require('../db/conexion.js');


class Category {
    constructor(category) {
        this.id = category.id
        this.name = category.name;
    }

    static async getById(id) {
        try {

            const [result] = await db_con.query('SELECT * FROM categorias WHERE id = ?', [id]);
            return result[0] || null;

        } catch (error) {
            console.error('Error al obtener la categoría:', error);
            throw new Error('Error al obtener la categoría');
        }
    }

    static async getAll() {

        try {
            const [result] = await db_con.query('SELECT * FROM categorias');
            return result;
            
        } catch (error) {
            console.error('Error al obtener las categorías:', error);
            throw new Error('Error al obtener las categorías');
        }
    }

    static async store(category) {

        try {
            const [result] = await db_con.query('INSERT INTO categorias set ?', category);
            return result

        } catch (error) {
            console.error('Error al crear la categoría:', error);
            throw new Error('Error al crear la categoria');
        }
    }

    static async update(category) {

        try {
            const [result] = await db_con.query('UPDATE categorias SET name = ? WHERE id = ?', [category.name, category.id]);
            return result.affectedRows;

        } catch (error) {
            console.error('Error al actualizar la categoría:', error);
            throw new Error('Error al actualizar la categoría');
        }
    }

    static async delet(id) {
        try {
            const [result] = await db_con.query('DELETE FROM categorias WHERE id = ?', [id]);
            return result;
        } catch (error) {
            console.error('Error al eliminar la categoría:', error);
            throw new Error('Error al eliminar la categoría');
        }
    }

}

module.exports = Category;

