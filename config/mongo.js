const mongoose = require("mongoose");

const dbConnection = () => {
  const DB_URI = process.env.DB_URI;
  try {
    mongoose.connect(
      DB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("DB Connected");
  } catch (error) {
    console.log("DB Connection Error");
    console.log(error);
  }
};

module.exports = dbConnection;
