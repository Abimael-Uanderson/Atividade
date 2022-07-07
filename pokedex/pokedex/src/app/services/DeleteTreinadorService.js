const ListTreinadorService = require("./ListTreinadorService");

const DeleteTreinadorService = {
  delete: (id) => {
    const treinadores = ListTreinadorService.ListtreinadorService();

    const treinadorIndice = treinadores.findIndex(
      (item) => item.id === Number(id)
    );
    if (treinadorIndice === -1) {
      return { erro: "Treinador não encontrado" };
    }

    treinadores.splice(treinadorIndice, 1);

    return { mensagens: "Treinador removido com sucesso" };
  },
};

module.exports = DeleteTreinadorService;
