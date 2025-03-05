const Category = require('../models/categories.js');//Modelo
const Product = require('../models/products.js');
const { documentHasAllData } = require('../services/validator_categ.js');//Validador


const getById = async (req, res) => {

    try {

        const category = await Category.getById(req.params.id);
        if (!category) return res.status(404).json({ error: "Categoría no encontrada" });
        res.status(200).json(category);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAll = async (req, res) => {
    try {
        const category = await Category.getAll();
        if (!category) return res.status(404).json({ error: "No hay categorías" });
        res.status(200).json(category);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const store = async (req, res) => {

    try {
        const { body } = req;

        const validationSuccess = await documentHasAllData(body);
        if (!validationSuccess) return res.status(400).json({ error: true });

        const category = await Category.store(body);
        if (!category) return res.status(404).json({ error: "Error al guardar categoría" });
        res.status(200).json({ error: false, status: "success", id_categoria: category.insertId });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const update = async (req, res) => {
    try {
        const { body } = req;

        const validationSuccess = await documentHasAllData(body);
        if(!validationSuccess) return res.status(400).json({error: true});


        const category = await Category.update(body);

        if (!category) return res.status(400).json({ error: "Error al acturalizar categoría" });
        return res.status(200).json({ error: false, status: "success", })

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const delet = async (req, res) => {
    try {
        const id = req.params.id;
        //Primero se verifica que la categoria no este asociada a ningun producto 
        
        const cat = await Product.categoryProduct(id);
        if(cat) return res.status(400).json({error:true, status: "error"})

        const category = await Category.delet(id);
        if (!category) return res.status(400).json({ error: "Error al eliminar categoría" });
        
        return res.status(200).json({ error: false, status: "susscces",});

    } catch (error) {

    }
}

module.exports = { getById, getAll, store, update, delet };