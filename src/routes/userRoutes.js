const express=require("express");
const router = express.Router();
const UserControllers=require('../controllers/UserControllers');


router.post('/', UserControllers.createUser);
router.get('/',UserControllers.getAllUsers);
router.get('/:id',UserControllers.getSingleUser);
router.put('/:id',UserControllers.updateUserById);
router.delete('/:id',UserControllers.deleteUserById);




module.exports=router;