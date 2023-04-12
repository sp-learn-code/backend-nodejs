const express = require("express");
const router = express.Router();

const { createItem } = require("../controllers/storage");

const uploadMiddleware = require("../utils/handleStorage");



// TODO: http://localhost:3001/api/storage - GET, POST, PUT, DELETE

// uploadMiddleware.single() => Para un solo archivo
// uploadMiddleware.array() => Para varios archivos
router.post("/", uploadMiddleware.single("myfile"),createItem);

router.get("/", (req, res) => {
  console.log("hola");
  res.send({ algo: 1 });
});

module.exports = router;
