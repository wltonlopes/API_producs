const { Product } = require('../models');

const getAll = async (_req, res) => {
  const products = await Product.findAll();
  res.status(200).json(products);
}
const getById = async (req, res) => {
  const products = await Product.findByPk(req.params.id);
  if (!products) {
    res.status(404).send('Produto não encontrado');
    return;
  }
  res.status(200).json(products);
}
const create = async (req, res) => {
  const products = await Product.create(req.body);
  res.status(201).json(products);
}
const deleteById = async (req, res) => {
  const products = await Product.findByPk(req.params.id);
  if (!products) {
    res.status(404).send('Produto não encontrado');
    return;
  }
  await products.destroy();
  res.status(204).send("Produto deletado com sucesso");
}

module.exports = {
  getAll,
  getById,
  create,
  deleteById,
}