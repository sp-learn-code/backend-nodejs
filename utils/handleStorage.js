const multer = require("multer");

/* Multer configuration */
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      const pathStorage = `${__dirname}/../storage/`;
      cb(null, pathStorage);
    },
    filename: (req, file, cb) => {
      // TODO: mi-cv.pdf mi-foto.jpg
      const ext = file.originalname.split(".").pop();
      const filename = `file-${Date.now()}.${ext}`;
      cb(null, filename);
    },
  });
  
  const uploadMiddleware = multer({ storage });

  module.exports = uploadMiddleware;