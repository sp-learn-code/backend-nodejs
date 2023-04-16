const express = require('express');

const { getItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/tracks');

const {validatorCreateItem, validatorGetItem} = require('../validators/tracks');

const router = express.Router();

// TODO: http://localhost:3000/tracks - GET, POST, PUT, DELETE


/**
 * Obtener lista de la base de datos
 **/
router.get("/", getItems);


/**
 * Obtener un detalle de item
 **/
router.get("/:id", validatorGetItem, getItem);

/**
 * Crear un registro
 **/

router.post("/", validatorCreateItem, createItem);

/**
 * Actualizar un registro
 **/

router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);

/**
 * Elimina un objeto un registro
 **/

router.delete("/:id", validatorGetItem, deleteItem);

module.exports = router;