const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://Admin:<user123>@user.zmbmd.mongodb.net/?retryWrites=true&w=majority&appName=User"; // Replace with your connection string
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