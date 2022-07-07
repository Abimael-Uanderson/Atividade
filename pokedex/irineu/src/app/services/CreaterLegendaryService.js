const { v4: uuidv4 } = require("uuidv");
const LegendaryModel = require("../models/LegendaryModel");

const CreaterLegendaryService = {
  createLegendary: (
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
    const newLegendary = new LegendaryModel(
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
    );
    return newLegendary;
  },
};

module.exports = CreaterLegendaryService;
