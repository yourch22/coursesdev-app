const Connectdb = require("../config/db");
const excecuteQuery = async (query,Parameters) =>{
    try {
        return (await new Promise((resolve, reject)=>{
            Connectdb.query(
                query,(err, data)=>(err ? reject(err) : resolve(data)),
                );
        }));
    } catch (error: any) {
        console.log(error.message);
        return [];
    }
}
export {excecuteQuery}