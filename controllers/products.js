const Product = require('../models/products.js');
const { documentHasAllData } = require('../services/validator_prd.js');

const getById = async (req, res) => {

    try {
        const product = await Product.getById(req.params.id);
        if (!product) return res.status(404).json({ error: "Producto no encontrado" });
        res.status(200).json(product);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

const getAll = async (req, res) => {
    try {

        const product = await Product.getAll();
        if (!product) return res.status(404).json({ error: "No hay productos" });
        res.status(200).json(product);

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
const store = async (req, res) => {
    try {
        const { body } = req;
       
        const validationSuccess = await documentHasAllData(body);
        if (!validationSuccess) return res.status(400).json({ error: true });

        const product = await Product.store(body);
        if (!product) return res.status(404).json({ error: "Error al guardar producto" });
        res.status(200).json({ error: false, status: "success", id_product: product.insertId });

    } catch (error) {

        return res.status(500).json({ error: error.message });
    }
}
const update = async (req, res) => {

    try {

        const { body } = req;
        const validationSuccess = await documentHasAllData(body);
        if(!validationSuccess) return res.status(400).json({error: true});

        const product = await Product.update(body);

        if (!product) return res.status(400).json({ error: "Error al acturalizar producto" });
        return res.status(200).json({ error: false, status: "success", })

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
const delet = async (req, res) => {
    try {
        const id = req.params.id;
        
        const product = await Product.delet(id);
        if (!product) return res.status(400).json({ error: "Error al eliminar producto" });
        return res.status(200).json({ error: false, status: "susscces" });

    } catch (error) {

        return res.status(500).json({ error: error.message });
    }
}

module.exports = { getById, getAll, store, update, delet };