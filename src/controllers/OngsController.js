const { Console } = require('console');
const connection = require('../database/connection');

module.exports = {   
    async index (request, response) {
        const ongs = await connection('ongs')
        .orderBy('ongNome')
        .select('*');
    
        return response.json(ongs);
    },    
        
    async create(request, response) {
        const {ongNome, ongTipo, ongCpfCnpj, ongLogradouro, ongNumero, ongComplemento, ongBairro, ongCidade, ongCep, ongEmail, ongTelefone, ongCelular, ongContato, ongQtdPets} = request.body;
        
        let datProcess = new Date();
        let year = datProcess.getFullYear();
        let month = datProcess.getMonth();
        let day = datProcess.getDate();
        
        let datCadastro = year + '-' + month + '-' + day;

        let status = "I";

        const [ongId] = await connection('ongs').insert({
            ongNome, 
            ongTipo, 
            ongCpfCnpj, 
            ongLogradouro, 
            ongNumero, 
            ongComplemento, 
            ongBairro, 
            ongCidade, 
            ongCep, 
            ongEmail, 
            ongTelefone, 
            ongCelular, 
            ongContato, 
            ongQtdPets: status    
        });
           
        return response.json({ongId});
    }, 
    
    async search(request, response) {
        let id = request.params.idPet;
        const ong = await connection('ongs')
            .where('ongId', id)
            .select('*')
            .first();
          
        if (!ong) {
            return response.status(400).json({ error: 'Ong nao encontrado'});
        } 

        return response.json(ong);
    },

    async update(request, response) {
        const { ongId, ongNome, ongTipo, ongCpfCnpj, ongLogradouro, ongNumero, ongComplemento, ongBairro, ongCidade, ongCep, ongEmail, ongTelefone, ongCelular, ongContato, ongQtdPets } = request.body;
        
        let id = request.body.ongId;
        
        const ong = await connection('ongs')
            .where('ongId', id)
            .update({
                ongNome, 
                ongTipo, 
                ongCpfCnpj, 
                ongLogradouro, 
                ongNumero, 
                ongComplemento, 
                ongBairro, 
                ongCidade, 
                ongCep, 
                ongEmail, 
                ongTelefone, 
                ongCelular, 
                ongContato,
                ongQtdPets 
            });
          
        return response.json(ong);
    },

};
