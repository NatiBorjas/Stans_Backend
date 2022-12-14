const multer = require("multer");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../public/pics"),
  filename: (req, file, cb) => {
    cb(null, uuidv4() + path.extname(file.originalname).toLocaleLowerCase());
  },
});

const uploadImg = multer({
  storage,
  limits: { fileSize: 1000000 },
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|gif|png/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname));
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb("error de archivo");
  },
}).single("image");

module.exports = { uploadImg };
