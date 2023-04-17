const { matchedData } = require("express-validator");
const { storageModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const  fs  = require("fs");

const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;
/**
 * Obtener lista de la base de datos
 * localhost:3000/tracks
 * @param {*} req
 * @param {*} res
 */

const getItems = async (req, res) => {
  try {
    const data = await storageModel.find({});
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
const getItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const data = await storageModel.findById(id);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_GET_ITEM", 403);
  }
};

/**
 * Insertr un registro
 * @param {*} req
 *  @param {*} res
 */
const createItem = async (req, res) => {
  try {
    const { file } = req;

    console.log(file);
    const fileData = {
      filename: file.filename,
      url: `${PUBLIC_URL}/${file.filename}`,
    };
    const data = await storageModel.create(fileData);

    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_ITEM", 403);
  }
};

/**
 * Eliminar un registro
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => {
  try {
    const { id } = matchedData(req);
    const dataFile = await storageModel.findById(id);
    // hard delete - remove from database
    // await storageModel.deleteOne({ _id: id });
    await storageModel.delete({ _id: id });
    const { filename } = dataFile;
    const filePath = `${MEDIA_PATH}/${filename}`;
    // hard delete - remove file from server
    // fs.unlinkSync(filePath);
    
    const data = {
      filePath,
      deleted:1
    }

    res.send({ data });

  } catch (error) {
    handleHttpError(res, "ERROR_DELETE_ITEM", 403);
  }
};

module.exports = {
  getItems,
  getItem,
  createItem,
  deleteItem,
};
