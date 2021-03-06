const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/crud', 
  {
      useNewUrlParser: true,
      useUnifiedTopology: true
  }
);

const db = mongoose.connection;

db.on("error", console.error.bind(console,"MongoDBconnection error: "));
db.once("open", function () { console.log("MongoDB connected successfully");});

module.exports = db;