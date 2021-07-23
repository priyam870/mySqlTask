const statusCode = require('../constants/status');

module.exports = {
    response : (res,status = statusCode.OK, message = "", data = {})=>{
        return res.status(status).send({
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
    }
}