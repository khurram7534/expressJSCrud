var express = require('express');
var router = express.Router();

let obj = require('../controller/userController');



/* GET users listing. */
router.get('/list', obj.index);

// get edit form
router.get('/edit/:id',obj.edit);

//save edit form
router.post('/update',obj.update);

//delete record
router.get('/delete/:id',obj.delete);

// get edit form
router.get('/create',obj.create);

//save edit form
router.post('/save',obj.save);




module.exports = router;
