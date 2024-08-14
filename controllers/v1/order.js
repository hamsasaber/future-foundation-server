const { orders } = require("../../models");

const getAll = async (req, res) => {
  const list = await orders.findAll();
  res.json(list);
};

const getById = async (req, res) => {
  const list = await orders.findByPk(req.params.id);
  res.json(list);
};

const Placeorder = async (req, res) => {
  const list = await orders.create({
    status: req.body.status,
    deliveryAddress: req.body.deliveryAddress,
    deliveryDate: req.body.deliveryDate,
  });
  res.json(list);
};

const updateOrder = async (req, res) => {
  const updatedList = await orders.update(
    {
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
