const express = require('express');

const router = express.Router();

const prdController = require('../controllers/products.js');


router.get('/:id', prdController.getById);

router.get('/', prdController.getAll);

router.post('/', prdController.store);

router.put('/', prdController.update);

router.delete('/:id', prdController.delet);

module.exports = router;