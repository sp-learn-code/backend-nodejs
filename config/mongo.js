const mongoose = require("mongoose");

mongoose.set('useFindAndModify', false);

const dbConnection = () => {
  const DB_URI = process.env.DB_URI;
  try {
    mongoose.connect(
      DB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    );
    console.log("DB Connected");
  } catch (error) {
    console.log("DB Connection Error");
    console.log(error);
  }
};

module.exports = dbConnection;
