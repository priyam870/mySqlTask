const utility = require('../../utility/index');

module.exports = {
    createTable : async()=>{
        try{
            console.log("user service");
            const query = "CREATE TABLE user(user_id INT AUTO_INCREMENT, first_name VARCHAR(100) NOT NULL, last_name VARCHAR(100), address VARCHAR(225),phone VARCHAR(10), email VARCHAR(100), PRIMARY KEY(user_id))";
            const result = await utility.executeQuery(query,null);
            console.log("result in services :>>>>>>>>>", result);
        }
        catch(error){
            throw error;
        }
    },
    insertUser : async(body)=>{
        try{
            const {first_name, last_name, address, phone, email} = body;
            let values = [first_name, last_name, address, phone, email];
            // const query = "INSERT INTO user(first_name, last_name, address, phone, email) VALUES(? ? ? ? ?)";
            const query = `INSERT INTO user(first_name, last_name, address, phone, email) VALUES (${first_name},${last_name},${address},${phone},${email})`;
            const result = await utility.executeQuery(query,null);
            console.log("services result:>>>>>>>>",result);
            return result;
        }
        catch(error){
            throw error;
        }
    }
}