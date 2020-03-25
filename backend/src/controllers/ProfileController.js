const connection = require('../database/conections');
module.exports ={
    async index(request, response){
        const profile = await connection('incidents').select('*');
        return response.json(profile);
    }
}