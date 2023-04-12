const mongoose = require("mongoose");

const StorageSchema = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    filename: {
      type: String,
    },
  },
  { timestamps: true, versionKey: false } // TODO: createAt, updatedAt
);

module.exports = mongoose.model("storages", StorageSchema);