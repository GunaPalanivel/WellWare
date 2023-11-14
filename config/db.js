const { MongoClient } = require('mongodb');
​
// MongoDB connection URL. Make sure to replace <connection_string> with your MongoDB connection string.
const uri = 'mongodb://localhost:27017/admin';
​
// Connect to MongoDB
async function connectToMongoDB() {
  try {
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    await client.connect();
​
    // Access the admin database
    console.log('connected to mongodb')
    client.close();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
​
// Call the connectToMongoDB function to start the connection
connectToMongoDB();