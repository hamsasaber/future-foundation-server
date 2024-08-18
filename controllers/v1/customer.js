//file containing the logic of methods for the customers section
const { customers } = require("../../models");

//keda ba get all the customers ely 3ndy
const getAll = async (req, res) => {
  const list = await customers.findAll(); //htgbly kol el customers ely 3ndy
  res.json(list);
};

const getById = async (req, res) => {
  const list = await customers.findByPk(req.params.id); //finds by primary key
  res.json(list);
};

//post
const create = async (req, res) => {
  console.log(req);
  const list = await customers.create(
    //object fy el fields ely ana 3yzaha bzbt
    {
      username: req.body.username ?? "john doe", //lw mafeesh username hayhot default john doe
      email: req.body.email ?? "john@example.com", //lw mafeesh email
      //... any other fields you want to add here for table customers
    }
  );
  res.json(list);
};

//lel put heya nafs fekret post
const Put = async (req, res) => {
  const list = await customers.update(
    //object fy el fields ely ana 3yzaha bzbt
    {
      username: req.body.username,
      email: req.body.email,
      //... any other fields you want to add here for table customers
    },
    {
      where: { id: req.params.id }, //dy lel put 3shan y3ml update lel specific record bas
    }
  );
  res.json(list);
};

//delete
const Remove = async (req, res) => {
  const list = await customers.destroy(
    //byakhod el id w by3mlo delete
    { where: { id: req.params.id } } //dy lel delete 3shan y3ml delete lel specific record
  );
  res.json(list);
};

module.exports = {
  getAll,
  getById,
  create,
  Put,
  Remove,
};
