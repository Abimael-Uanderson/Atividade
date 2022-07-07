const { request, response } = require("../../app");
const LegendariesService = require("../services/LegendariesService");

const controller = {
  index: (request, response) => {
    const listLegendaries = LegendariesService.listLegendariesService();

    response.json(listLegendaries);
  },
  ListData: (request, response) => {
    const { name } = request.query;

    const legendary = LegendariesService.listPokemonData(name);

    return response.json(legendary);
  },
  create: (request, response) => {
    const {
      name,
      description,
      type,
      healthPoints,
      specialAttack,
      defense,
      attack,
      experience,
      specialDefense,
    } = request.body;

    const legendary = CreateLegendaryService.createLegendary(
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
    return response.json(legendary);
  },
  update: (request, response) => {
    const { id } = request.params;
    const {
      name,
      description,
      type,
      healthPoints,
      specialAttack,
      defense,
      attack,
      experience,
      specialDefense,
    } = response.body;
  },
};

module.exports = controller;
