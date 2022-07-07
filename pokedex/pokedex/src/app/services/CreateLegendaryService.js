const LegendaryModel = require('../models/legendaryModel');
const { v4 } = require('uuid')

const CreateLegendaryService = {
    createLengendary: (
        name,
        description,
        type,
        healthPoints,
        specialAttack,
        defense,
        attack,
        experience,
        specialDefense
    ) => {
        const newLegenday = new LegendaryModel(
            v4(),
            name,
            description,
            type,
            healthPoints,
            specialAttack,
            defense,
            attack,
            experience,
            specialDefense
        )

        return newLegenday; 
    }

}

module.exports = CreateLegendaryService;