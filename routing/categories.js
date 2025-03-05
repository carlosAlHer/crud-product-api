const express = require('express');
const router = express.Router();
const categController = require('../controllers/categories.js');


router.get('/:id', categController.getById);

 router.get('/', categController.getAll);

router.post('/', categController.store);

router.put('/', categController.update);

router.delete('/:id', categController.delet);

module.exports = router; 