const statusCode = require('../constants/status');
const con = require('../connection/connect');
module.exports = {
    successResponse : async(res,status = statusCode.OK, message = "", data = {})=>{
        return res.status(status).json({
            success: true,
            message: message,
            data: data
        })
    },
    exception : class HttpException extends Error{
        constructor(message, status = statusCode.BAD_REQUEST){
            super();
            this.message = message;
            this.status = status
        }
    },
    executeQuery : async(query,value)=>{
        try{
        return await con.query(query,value,(err,result)=>{
            if(err) throw err;
            return result;
        })
        }
        catch(error){
            throw error;
        }
    }
}