const express = require("express");
const router = express.Router();

const { createItem, getItem, getItems, deleteItem } = require("../controllers/storage");

const uploadMiddleware = require("../utils/handleStorage");
const { validatorGetItem } = require("../validators/storage");



// TODO: http://localhost:3001/api/storage - GET, POST, PUT, DELETE

// uploadMiddleware.single() => Para un solo archivo
// uploadMiddleware.array() => Para varios archivos

/**
 * Crear un registro en la base de datos y subir un archivo
**/
router.post("/", uploadMiddleware.single("myfile"),createItem);

/**
 *  Obtener lista de la base de datos 
**/

router.get("/",  getItems);

/**
 * Obtener un detalle
**/

router.get("/:id", validatorGetItem, getItem);


/**
 * Eliminar un registro
**/

router.delete("/:id",validatorGetItem, deleteItem);

module.exports = router;
