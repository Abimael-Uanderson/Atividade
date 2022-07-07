const treinadorModel = require("../models/treinadorModel");
const { v4 } = require("uuid");

const CreateTreinadorService = {
  createTreinador: (name, idade, cidade) => {
    const newTreinador = new treinadorModel(v4(), name, idade, cidade);

    if (newTreinador.idade < 15 || newTreinador.idade > 39) {
      return { erro: "Sua idade não é válida " };
    }

    if (newTreinador.name.length < 5) {
      return { erro: "nome precisa ter no mínimo 5 caracteres" };
    }

    if (newTreinador.cidade != "Pallet" && newTreinador.cidade != "Vermelion") {
      return { erro: "Sua cidade não é válida " };
    }

    return newTreinador;
  },
};

module.exports = CreateTreinadorService;
