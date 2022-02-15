const { User } = require('../models')

const getAll = async (_req, res) => {
  const users = await User.findAll();
  res.status(200).json(users);
}
const getById = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    res.status(404).send('Usuário não encontrado');
    return;
  }
  res.status(200).json(user);
}
const create = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
}
const deleteById = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    res.status(404).send('Usuário não encontrado');
    return;
  }
  await user.destroy();
  res.status(204).send("Usuário deletado com sucesso");
}

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
}