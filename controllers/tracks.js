const { matchedData } = require("express-validator");
const { tracksModel } = require("../models");

/**
 * Obtener lista de la base de datos
 * localhost:3000/tracks
 * @param {*} req
 * @param {*} res
 */

const getItems = async (req, res) => {
  try {
    const data = await tracksModel.find({});
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_GET_ITEMS", 403);
  }
};

/**
 * Obtener un detalle
 * @param {*} req
 * @param {*} res
 */
const getItem = (req, res) => {};

/**
 * Insertr un registro
 * @param {*} req
 *  @param {*} res
 */
const createItem = async (req, res) => {
  try {
    const body = matchedData(req);
    const data = await tracksModel.create(body);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_ITEM", 403);
  }
};

/**
 * Actualizar un registro
 * @param {*} req
 * @param {*} res
 */
const updateItem = (req, res) => {};

/**
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const deleteItem = (req, res) => {};

module.exports = {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
};
