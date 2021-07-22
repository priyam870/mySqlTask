const userRouter = require('express').Router();
const userController = require('../controllers/userController');

userRouter.get('/createTable',userController.createTable);
userRouter.post('/insertUser',userController.insertUser);


module.exports = userRouter;