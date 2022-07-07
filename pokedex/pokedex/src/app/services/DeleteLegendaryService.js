const LegendariesService = require("./LegendariesService")

const DeleteLegendaryService = {
    delete: (id) => {
        const pokemons = LegendariesService.listLegendariesService()
        const pokemonIndice = pokemons.findIndex(item => item.id === Number(id))
        if (pokemonIndice === -1) {
            return { erro: 'Pokemon não encontrado'}
    
        }

        pokemons.splice(pokemonIndice,1)
        
        return {mensagens: 'Pokemon removido com sucesso'}
    }
}

module.exports = DeleteLegendaryService;