const router = require('express').Router();
const controller = require('../controller/itemController');

//route to the main dashboard:
router.get('/dashboard', controller.dashboard);

// get a single item by id:
router.get('/:id', controller.getItem);

// update a single item by id:
router.put("/:id", controller.updateItem);

//delete a single item by id:
router.delete("/:id", controller.deleteItem);




module.exports = router;