const userRouter = require('express').Router();
const userController = require('../controllers/userController');
const user = require('../validations/user');

userRouter.get('/createTable',userController.createTable);
userRouter.get('/getUsers',userController.getUsers);

userRouter.post('/insertUser',userController.insertUser);

userRouter.put('/updateUser',userController.updateUser);

userRouter.delete('/deleteUser',userController.deleteUser);


module.exports = userRouter;