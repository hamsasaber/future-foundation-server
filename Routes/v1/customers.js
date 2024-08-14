const express = require("express");
const router = express.Router();

//define el methods hena then best practice b3ml a file bara esmo controllers w ba2asemo for v1
//then i create a file lel customers w bktb feh kol el logic beta3 el methods
const {
  getAll,
  getById,
  create,
  Put,
  Remove,
} = require("../../controllers/v1/customer"); //imports bt3ty mn controllers el cutomers

router.get("/", getAll);
//:id dy param 3shan takhod el id
router.get("/:id", getById); //route function getById
router.post("/", create); //route function create
router.put("/:id", Put);
router.delete("/:id", Remove);

module.exports = router;
