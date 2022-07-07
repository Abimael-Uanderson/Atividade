const treinadorModel = require("../models/treinadorModel");

const ListtreinadorService = {
  ListtreinadorService: () => {
    const treinador = new treinadorModel(1, "Marina", "21", "Vermelion");
    const treinador2 = new treinadorModel(2, "Misty", "22", "Pallet");
    return [treinador, treinador2];
  },
  listTreinadorData: (treinadorName) => {
    const treinadorList = ListtreinadorService.ListtreinadorService();
    const treinador = treinadorList.find((item) => item.name === treinadorName);
    return treinador;
  },
};

module.exports = ListtreinadorService;
