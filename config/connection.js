const { connect } = require("mongoose");

async function MongoDBconnection(url) {
  try {
    connect(process.env.MONGODB_URI);
    console.log("MongoDB connected!!!");
  } catch (error) {
    console.log("Connection Error!!");
  }
}

module.exports = {
  MongoDBconnection,
};
