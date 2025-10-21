const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function testConnection() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas!");
    
    const db = client.db('portfolio');
    const collection = db.collection('messages');
    
    // Test insert
    await collection.insertOne({
      test: "Hello MongoDB!",
      date: new Date()
    });
    
    console.log("Test document inserted!");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    await client.close();
  }
}

testConnection();