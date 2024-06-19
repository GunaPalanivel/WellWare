const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017"; // Replace with your MongoDB URI
const dbName = "admin"; // Replace with your database name

let client;

async function connectDB() {
  if (!client) {
    client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    try {
      await client.connect();
      console.log("Connected to the MongoDB server");
    } catch (err) {
      console.error("Could not connect to MongoDB", err);
      throw err;
    }
  }
  return client;
}

async function getDB() {
  if (!client) {
    await connectDB();
  }
  return client.db(dbName);
}

module.exports = {
  connectDB,
  getDB,
};
