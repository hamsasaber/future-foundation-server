const express = require("express");
const router = express.Router();

const {
  getAll,
  getById,
  Placeorder,
  updateOrder,
  deleteOrder,
} = require("../../controllers/v1/order");

router.get("/", getAll);

router.get("/:id", getById);
router.post("/", Placeorder);
router.put("/:id", updateOrder);
router.delete("/:id", deleteOrder);

module.exports = router;
