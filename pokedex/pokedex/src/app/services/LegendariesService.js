const LegendaryModel = require('../models/legendaryModel');

const LegendariesService = {
    listLegendariesService: () => { 
        const pokemon = new LegendaryModel (
            1,
            'MewTwo',
            'Descrição',
            'pokemon',
            '1000',
            '1000',
            '1000',
            '1000',
            '1000',
            '1000'
        )

        const pokemon2 = new LegendaryModel (
            2,
            'Pikache',
            'Descrição',
            'pokemon',
            '1000',
            '1000',
            '1000',
            '1000',
            '1000',
            '1000'
        )
        return [pokemon,pokemon2]
    },
    listPokemonData: (pokemonName) => {
        const pokemonList = LegendariesService.listLegendariesService();
        const pokemon = pokemonList.find(item => item.name === pokemonName)
        return pokemon
    }
}

module.exports = LegendariesService;