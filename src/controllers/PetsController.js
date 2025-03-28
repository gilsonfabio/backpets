const { Console } = require('console');
const connection = require('../database/connection');

module.exports = {   
    async index (request, response) {
        const pets = await connection('pets')
        .orderBy('petNome')
        .select('*');
    
        return response.json(pets);
    },    
        
    async create(request, response) {
        const { petNome, petTipo, petCorSinais, petPorte, petGenero, petIdade, petObservacoes, petAdoId, petAuxId, pedUsrId, pedOngId} = request.body;
        
        let datProcess = new Date();
        let year = datProcess.getFullYear();
        let month = datProcess.getMonth();
        let day = datProcess.getDate();
        
        let datCadastro = year + '-' + month + '-' + day;

        let status = "I";

        const [petId] = await connection('pets').insert({
            petNome, 
            petTipo, 
            petCorSinais, 
            petPorte, 
            petGenero, 
            petIdade, 
            petObservacoes, 
            petAdoId, 
            petAuxId, 
            petDatCadastro: datCadastro, 
            pedUsrId, 
            pedOngId, 
            pedStatus: status    
        });
           
        return response.json({petId});
    }, 
    
    async search(request, response) {
        let id = request.params.idPet;
        const pet = await connection('pets')
            .where('petId', id)
            .join('ongs', 'ongId', 'pets.petOngId')
            .join('adotante', 'adoId', 'pets.petAdoId')
            .join('adotante', 'adoId', 'pets.petAuxId')
            .join('usuario', 'usrId', 'pets.petUsrId')
            .select('*')
            .first();
          
        if (!pet) {
            return response.status(400).json({ error: 'Pet nao encontrado'});
        } 

        return response.json(pet);
    },

    async update(request, response) {
        const { petId, petNome, petTipo, petCorSinais, petPorte, petGenero, petIdade, petObservacoes, petAdoId, petAuxId, pedUsrId, pedOngId} = request.body;
        
        let id = request.body.petId;
        
        const pet = await connection('pets')
            .where('petId', id)
            .update({
                petNome, 
                petTipo, 
                petCorSinais, 
                petPorte, 
                petGenero, 
                petIdade, 
                petObservacoes, 
                petAdoId, 
                petAuxId, 
                pedUsrId, 
                pedOngId       
            });
          
        return response.json(pet);
    },

};
