const Document = require('../models/products.js');
const { documentHasAllData } = require('../services/validator_prd.js');

exports.getAll = (request, res) => {

    const callback = (err, documents) => (err)
        ? res.send(err)
        : res.send({ documents });

    Document.getAll(callback);
}

exports.getById = (request, res) => {
    const { id } = request.params;

    const callback = (err, document) => (err)
        ? res.send(err)
        : res.send({ document });

    Document.getById({ id }, callback);
}

exports.store = async (request, res) => {
    const { body } = request;

    const newDocument = new Document(body);

    const validationSuccess = await documentHasAllData(newDocument);

    if (!validationSuccess)
        return res.status(400).json({ error: true });

    const callback =  (err, result) => (err) 
        ? res.send(err)
        : res.json({ error: false, status: "success", id_product: result.insertId });

    Document.store(newDocument, callback);
};

exports.update = async (request, res) => {

    const { body } = request;

    const newDocument = new Document(body);

    const validationSuccess = await documentHasAllData(newDocument);

    if (!validationSuccess)
        return res.status(400).json({ error: true });

    const callback = err => (err)
        ? res.send(err)
        : res.json({ error: false, status: "success" });

    Document.update(newDocument, callback);
};

exports.delete = (request, res) => {
    const { id } = request.params;

    const callback = err => (err) 
        ? res.send(err)
        : res.json({ error: false, status: "success" });

    Document.delete(id, callback);
}