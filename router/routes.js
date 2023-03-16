const express = require('express');
const router = express.Router();

const userController = require('../controller/user');

router.get('/',(req,res)=>{
    res.json('Hello World');
});
router.get('/users', userController.getUser);
router.put('/update/:id',userController.updateUser);
router.post('/add',userController.addUser);
router.get('/user/:id',userController.getUserById)

module.exports = router;