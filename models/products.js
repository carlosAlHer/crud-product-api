const db_con = require('../db/conexion.js');


class Product {
    constructor(product) {
        this.id = product.id;
        this.name = product.name;
        this.description = product.description;
        this.price = product.price;
        this.category_id = product.category_id;
    }

    static async getById(id) {

        try {
            const [result] = await db_con.query('SELECT * FROM productos WHERE id = ?', [id]);
            return result[0] || null;
        } catch (error) {
            console.error('Error al obtener producto:', error);
            throw new Error('Error al obtener producto');
        }
    }

    static async getAll() {
        try {
            const [result] = await db_con.query('SELECT * FROM productos');
            return result || null;
        } catch (error) {
            console.error('Error al obtener  productos:', error);
            throw new Error('Error al obtener  productos');
        }
    }
    static async store(product) {
        try {

            const [result] = await db_con.query('INSERT INTO productos set ?', product);
            return result || null;

        } catch (error) {

            console.error('Error al crear producto:', error);
            throw new Error('Error al crear producto');
        }
    }
    static async update({ id, name, description, price, category_id }) {
        try {

            const [result] = await db_con.query('UPDATE productos SET name = ?, description = ?, price = ?, category_id = ?  WHERE id = ?',
                [name, description, price, category_id, id]);
                return result || null;

        } catch (error) {
            console.error('Error al actualizar producto:', error);
            throw new Error('Error al actualizar producto');
        }
    }
    static async delet(id) {
        try {
            const [result] = await db_con.query('DELETE FROM productos WHERE id = ?', [id])
            return result || null;
        } catch (error) {
            console.error('Error al eliminar producto:', error);
            throw new Error('Error al eliminar producto');
        }
    }

    //verifica si una categoria esta presente en uno o mas productos
    static categoryProduct = async (id) =>{
        try {

            const [products] = await db_con.query(
                "SELECT COUNT(*) AS count FROM productos WHERE category_id = ?", 
                [id]
            );
            return products[0].count > 0;
        } catch (error) {
            console.error('Error al verificar productos con esta categoría:', error);
            throw new Error('Error al verificar productos con esta categoría');
        }
    }
}

module.exports = Product;
