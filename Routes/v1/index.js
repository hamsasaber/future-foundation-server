//libraries
const express = require("express");
const router = express.Router();

//lw galy ay endpoint feha /customers hydkhol 3al folder da  yeshoof el routes ely feh
router.use("/customers", require("./customers"));
router.use("/orders", require("./orders"));
router.use("/products", require("./products"));
module.exports = router;
