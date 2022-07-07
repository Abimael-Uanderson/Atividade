//const { request, response } = require("express");
const CreateTreinadorService = require("../services/CreateTreinadorService");
const ListTreinadorService = require("../services/ListTreinadorService");
const UpdateTreinadorService = require ("../services/UpdateTreinadorService");
const DeleteTreinadorService = require ("../services/DeleteTreinadorService");

const controllerT = {
  ListData: (request, response) => {
    const { name } = request.query;

    if (!name) {
      return response.status(400).json({ erro: "Você não passou o nome do treinador" });
    }
    const treinador = ListTreinadorService.listTreinadorData(name);

    return response.json(treinador);
  },

  create: (request, response) => {
    const { name, idade, cidade } = request.body;

    if (!name) {
        return response.status(400).json({ erro: "Você não passou o nome do treinador" });
      }

      if (!idade) {
        return response.status(400).json({ erro: "Você não passou a idade do treinador" });
      }

    const treinador = CreateTreinadorService.createTreinador(
      name,
      idade,
      cidade
    );
    console.log(treinador);
    return response.json(treinador);
  },

  update: (request, response) => {
    const { id } = request.params

    const {
        name,
        idade,
        cidade,

    } = request.body;

    if (!name) {
      return response.status(400).json({ erro: "Você não passou o nome do treinador" });
    }

    if (!idade) {
      return response.status(400).json({ erro: "Você não passou a idade do treinador" });
    }

    const updatedTreinador= UpdateTreinadorService.update(
        id,
        name,
        idade,
        cidade
    )
    response.json(updatedTreinador);     
  },

  delete: (request, response) => {
    const { id } = request.params

    if (!id) {
      return response.status(400).json({ erro: "Você não passou o nome do treinador" });
    }

    const resultado = DeleteTreinadorService.delete(id)

    response.send(resultado)
  }


};

module.exports = controllerT;