//imports
const express = require("express");
const cors = require("cors");
const db = require("./models");
const path = require("path");
//setup
const port = 9850; //any number
const app = express();
app.use(cors());
app.use(express.json());

// const middleware = (req, res, next) => {
//   if (req.body.approved === false) return res.status(404).send("invalid");
//   return next();
//   //middleware is used to validate tokens/requests/upload
//   //when used with a route it checks middleware condition el awl before rerouting to original path
// };

//route byakhod el file name w byraga3holy (syntax is consistent whenever im working with images)
app.get("/images/:name", function (req, res, next) {
  var options = {
    root: path.join(__dirname, "images"),
    dotfiles: "deny",
    headers: {
      "x-timestamp": Date.now(),
      "x-sent": true,
      "Cross-Origin-Resource-Policy": "cross-origin",
    },
  };
  var fileName = req.params.name;
  res.sendFile(fileName, options, function (err) {
    if (err) {
      return res.status(404).json("File not found");
    }
  });
});

//routes
//routes are created in their own folder 3shan maz7msh el index.js w ba link it using
app.use("/api", require("./Routes"));

//run server
db.sequelize //sequelize syncs db
  .sync() //bahotaha fl sync 3shan lama el db syncs successfully only then will i start listening
  .then(() => {
    console.log("Database connected successfully");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    }); //runs the server
  })
  .catch((err) => {
    console.log(err);
  }); //lw hasl moshkela fl syncing
