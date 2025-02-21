const express = require('express');

const router = express.Router();

const prdController = require('../controllers/products.js');

router.get('/', prdController.getAll);

router.get('/:id', prdController.getById);

router.post('/', prdController.store);

router.put('/', prdController.update);

router.delete('/:id', prdController.delete);

module.exports = router;