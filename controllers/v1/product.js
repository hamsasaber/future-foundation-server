const { products } = require("../../models");

const getAll = async (req, res) => {
  const list = await products.findAll();
  res.json(list);
};

const getById = async (req, res) => {
  const listById = await products.findByPk(req.params.pk);
  res.json(listById);
};

const createProduct = async (req, res) => {
  const product = await products.create({
    title: req.body.title,
    price: req.body.price,
    quantity: req.body.quantity,
    rating: req.body.rating,
    image: req.file ? req.file.path : "", //ifimage exists byhotaha otherwise btb2a empty ""
  });
  res.json(product);
};

const updateProduct = async (req, res) => {
  const updatedList = await products.create(
    {
      title: req.body.title,
      price: req.body.price,
      quantity: req.body.quantity,
      rating: req.body.rating,
    },
    {
      where: { id: req.params.id },
    }
  );
  res.json(updatedList);
};

const deleteProduct = async (req, res) => {
  const deletedproduct = await products.destroy({
    where: { id: req.params.id },
  });
  res.json(deletedproduct);
};

module.exports = {
  getAll,
  getById,
  createProduct,
  updateProduct,
  deleteProduct,
};
