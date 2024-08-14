//this syntax is standard when i want to upload images into my webpage

//imports
const multer = require("multer"); //acts as a middleware to store the image and then retreive it
const path = require("path"); // libarary to read paths on pc

// Function to generate the multer storage configuration
// The destination is the folder where the uploaded images will be stored.
// The filename is a combination of the current date and the original name of the file.
// The file type is validated using the fileFilter function.
const generateStorage = (destination) =>
  multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, destination);
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname));
    },
  });

// Function to validate the file types
const fileFilter = (file, cb) => {
  const fileTypes = /jpeg|jpg|png|gif/;
  const mimeType = fileTypes.test(file.mimetype); //validates types of images
  const extname = fileTypes.test(path.extname(file.originalname));

  // If the file type is valid, it is saved to the specified destination.
  // If the file type is not valid, an error message is returned.
  if (mimeType && extname) {
    cb(null, true);
  } else {
    cb("Incompatible Image type");
  }
};

// Storage configurations
const storage = generateStorage("images"); //stores the images fy folder images

// Upload configurations
//function that ill call b3d keda to upload the image
const upload = multer({
  storage: storage,
  limits: { fileSize: 5000000 }, //5Mb limit
  fileFilter: (req, file, cb) => fileFilter(file, cb),
}).single("image"); //single image upload

module.exports = { upload };
