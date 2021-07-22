const serivces = require('../services/userService');
const utility = require('../../utility/index');
const message = require('../../constants/messages');
const status = require('../../constants/status');
const validation = require('../validations/user');
const { validateInserUser } = require('../validations/user');

module.exports = {
    createTable : async(req,res,next)=>{
        try{
            console.log("user controller");
            const responseData = await serivces.createTable();
            console.log("controller response data", responseData);
            return utility.successResponse(res,message.TABLE_CREATED,status.OK,responseData);
        }
        catch(error){
            console.log("catch block",error);
            next(error);
        }
    },
    insertUser : async(req,res,next)=>{
        try{
            validation.validateInsertUser(req.body);
            const responseData = await serivces.insertUser(req.body);
            console.log("controller response data:>>>>>>>>>>>>",responseData);
            return utility.successResponse(res,message.USER_CREATED,status.OK,responseData);
        }
        catch(error){
            next(error);
        }
    }
}