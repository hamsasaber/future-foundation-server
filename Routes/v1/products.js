const express = require("express");
const router = express.Router();

const {
  getAll,
  getById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../../controllers/v1/product");
const { upload } = require("../../middleware/imageUpload");

router.get("/", getAll);
router.get("/:id", getById);
router.post("/", upload, createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
