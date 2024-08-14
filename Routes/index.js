//libraries
const express = require("express");
const router = express.Router();

//routing
//v1 is like version 1 of my API mmken a3ml aktar mn version
//w2taha mmken ast3ml aktar mn version w bktbha zy el v1
router.use("/v1", require("./v1"));
module.exports = router;

//msh b3ml export using el arrow function 3shan da object 3yza b3d ama a-ahot kol declarations gowa el router objects w2taha ye export
