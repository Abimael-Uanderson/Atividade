const ListTreinadorService = require("./ListTreinadorService")


const UpdateTreinadorService = {
    update: (
        id,
        name,
        idade,
        cidade
    ) => {
        const treinadores = ListTreinadorService.ListtreinadorService()
        
        const treinadorIndice = treinadores.findIndex(item => item.id === Number(id))
        if (treinadorIndice === -1) {
            return { erro: "Treinador não encontrado"}

        }

        treinadores[treinadorIndice] = {
            name,
            idade,
            cidade
        }
        
        return {
            id, 
            ...treinadores[treinadorIndice]
        }
    
    }
}

module.exports = UpdateTreinadorService;


