const joi = require('joi');

const validateSchema = async (inputs, schema) => {
    try {
        const { error, value } = schema.validate(inputs);
        console.log("JOI VALIDATE:>>>>>>>>>>>>>>>> ERROR: " + error + " >>>>>>>>>>>>>> VALUE: " + value);
        if (error) throw error;
    }
    catch (error) {
        throw error;
    }
}

module.exports = {
    validateInsertUser: async (body) => {
        const schema = joi.object({
            first_name: joi.string().required(),
            last_name: joi.string().required(),
            address: joi.string().required(),
            phone: joi.string().required(),
            email: joi.string().email().lowercase().trim().required()
        });
        return validateSchema(body, schema);
    },
    validateUpdateUser: async(body) =>{
        const schema = joi.object({
            user_id : joi.number().required(),
            first_name: joi.string().optional(),
            last_name: joi.string().optional(),
            address: joi.string().optional(),
            phone: joi.string().optional(),
            email: joi.string().email().lowercase().trim().optional()
        });
        return validateSchema(body, schema);
    }
}