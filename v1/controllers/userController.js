const utility = require('../../utility/index');
const message = require('../../constants/messages');
const status = require('../../constants/status');
const validation = require('../validations/user');
const { validateInserUser } = require('../validations/user');
const database = require('../../connection/connect');

module.exports = {
    createTable: async (req, res, next) => {
        try {
            const query = "CREATE TABLE user(user_id INT AUTO_INCREMENT, first_name VARCHAR(100) NOT NULL, last_name VARCHAR(100), address VARCHAR(225),phone VARCHAR(10), email VARCHAR(100), PRIMARY KEY(user_id))";
            database.query(query, (err, result) => {
                if (err) {
                    console.log("ERROR---------------->",error);
                    return;
                }
                return utility.response(res, status.OK, message.TABLE_CREATED, {});
            });
        }
        catch (error) {
            next(error);
        }
    },
    insertUser: async (req, res, next) => {
        try {
            validation.validateInsertUser(req.body);
            const { first_name, last_name, address, phone, email } = req.body;
            const values = [first_name, last_name, address, phone, email];
            const query = "INSERT INTO user(first_name, last_name, address, phone, email) VALUES(?,?,?,?,?)";
            database.query(query,values,(err,result)=>{
                if(err) {
                    console.log("ERROR-------------------->",err);
                    return;
                }
                return utility.response(res,status.OK,message.USER_CREATED,result);
            })
        }
        catch (error) {
            next(error);
        }
    },
    getUsers : async(req, res, next) =>{
        try{
            const query = "SELECT * FROM user";
            database.query(query,(err,result)=>{
                if(err) {
                    console.log("ERROR---------------->",err);
                    return;
                }
                return utility.response(res,status.OK,message.SUCCESS,result);
            })
        }
        catch(error){
            next(error);
        }
    },
    updateUser : async(req,res,next)=>{
        try{
            validation.validateUpdateUser(req.body);
            const {first_name, last_name, phone, email, address, user_id} = req.body;

            const updateObj = {};
            const arr = [];

            if(first_name){
                updateObj.first_name = first_name;
            }
            if(last_name){
                updateObj.last_name = last_name;
            }
            if(address){
                updateObj.address = address;
            }
            if(email){
                updateObj.email = email;
            }
            if(phone){
                updateObj.phone = phone;
            }
            arr.push(updateObj);
            arr.push(user_id);
            console.log("update obj:>>>>>>>>>>>>>>>",arr);
            const query = "UPDATE user SET ? WHERE user_id = ?";
            database.query(query,arr,(err,result)=>{
                if(err) {
                    console.log("ERROR--------------------->",err);
                    return;
                }
                return utility.response(res,status.OK,message.SUCCESS,result);
            })
        }
        catch(error){
            next(error);
        }
    },
    deleteUser : async(req,res,next)=>{
        try {
            const {user_id} = req.body;
            const query = `DELETE FROM user WHERE user_id = ${user_id}`;
            await database.query(query,(err,result)=>{
                if(err){
                    console.log("error:>>>>>>>>>>>>",err);
                    return;
                }
                return utility.response(res,status.OK,message.USER_DELETED,result);
            })
        }
        catch(error){
            next(error);
        }
    }
}