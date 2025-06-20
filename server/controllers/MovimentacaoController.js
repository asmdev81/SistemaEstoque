const { validationResult } = require('express-validator');
const db = require('../database/connection');

class Controller {

  // Listar todas
  async index(req, res) {

    try {
      const movimentacoes = await db('movimentacoes').select('*');
      return res.status(200).json(movimentacoes);
    } catch (error) {
      console.error('Erro ao listar movimentações:', error);
      return res.status(500).json({ error: 'Erro ao listar movimentações' });
    }
  }

  // Buscar ID
  async show(req, res) {

  }

  // Criar novo
  async store(req, res) {

  }

  // Atualizar
  async update(req, res) {

  }

  // Deletar
  async destroy(req, res) {

  }
}

module.exports = new Controller();