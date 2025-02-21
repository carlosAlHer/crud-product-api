const express = require('express');

const router = express.Router();

const categController = require('../controllers/categories.js');

router.get('/', categController.getAll);

router.get('/:id', categController.getById);

router.post('/', categController.store);

router.put('/', categController.update);

router.delete('/:id', categController.delete);

module.exports = router;