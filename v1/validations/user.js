const joi = require('joi');

const validateSchema = async(inputs,schema)=>{
    try{
        const {error, value} = schema.validate(inputs);
        console.log("JOI VALIDATE:>>>>>>>>>>>>>>>> ERROR: "+error+" >>>>>>>>>>>>>> VALUE: "+value);
        if(error) throw error;
    }
    catch(error){
        throw error;
    }
}

module.exports = {
    validateInsertUser : async(body)=>{
        try{
            const schema = joi.object({
                first_name: joi.string().required(),
                last_name: joi.string().required(),
                address: joi.string().required(),
                phone: joi.string().required(),
                email: joi.string().email().lowercase().trim().required()
            });
            return validateSchema(body,schema);
        }
        catch(error){
            console.error(error);
            throw error;
        }
    }
}