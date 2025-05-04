const mongoose = require('mongoose');
const uri = "mongodb+srv://nkugwadev069:S6UJfCzZWeCVBhVq@cluster0.znqxk.mongodb.net/pharmacare?retryWrites=true&w=majority&appName=Cluster0";

async function connectToDatabase() {
    try {
        await mongoose.connect(uri);
        console.log("Successfully connected to MongoDB.");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        throw error;
    }
}

// If you need to close the connection
async function closeConnection() {
    try {
        await mongoose.connection.close();
        console.log("MongoDB connection closed");
    } catch (error) {
        console.error("Error closing MongoDB connection:", error);
        throw error;
    }
}

module.exports = {
    connectToDatabase,
    closeConnection
};