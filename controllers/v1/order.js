const { orders, products, customers } = require("../../models"); //tables from folder models

const getAll = async (req, res) => {
  const list = await orders.findAll({
    //b3ml include 3shan a3ml join between tables products w orders so when i get orders byb2a ma3aya corresponding products object to be able to access them
    include: [
      {
        model: products,
      },
      {
        model: customers,
      },
    ],
  });
  res.json(list);
};

const getById = async (req, res) => {
  const list = await orders.findByPk(req.params.id);
  res.json(list);
};

const Placeorder = async (req, res) => {
  const list = await orders.create({
    productId: req.body.productId,
    customerId: req.body.customerId,
    status: req.body.status,
    deliveryAddress: req.body.deliveryAddress,
    deliveryDate: req.body.deliveryDate,
  });
  res.json(list);
};

const updateOrder = async (req, res) => {
  const updatedList = await orders.update(
    {
      productId: req.body.productId,
      customerId: req.body.customerId,
      status: req.body.status,
      deliveryAddress: req.body.deliveryAddress,
      deliveryDate: req.body.deliveryDate,
    },
    {
      where: { id: req.params.id },
    }
  );
  res.json(updatedList);
};

const deleteOrder = async (req, res) => {
  const deletedList = await orders.destroy({ where: { id: req.params.id } });
  res.json(deletedList);
};

module.exports = {
  getAll,
  getById,
  Placeorder,
  updateOrder,
  deleteOrder,
};
