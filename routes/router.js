const router = require("express").Router();
const Products = require('../models/product');
const controller = require('../controller/controller');

// A ROUTE TO ACCESS ALL THE PRODUCTS IN THE DATABASE
router.get('/', controller.HomePage);

//GLOSSARY ITEMS CATEGORIES ROUTES
router.get('/meat',controller.meatSection);

router.get('/fruit', controller.fruitSection);

router.get('/vegetable', controller.vegetableSection);

router.get('/legume', controller.legumeSection);


// ROUTE TO INSERT AN ITEM INTO THE DATABASE
router.post('/', controller.uploadData);


module.exports = router;