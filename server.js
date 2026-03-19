const express = require('express');
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = 3001;

const uri = process.env.MONGO_URI;

const client = new MongoClient(uri);

app.get('/', async(req, res) => {
    try {
        await client.connect();

        res.status(200).json({ message: "connect to mongoDb"});
    } catch (error) {
        console.error("MongoDb connection error: ", error);
        res.status(500).json({ message: "failed to connect to mongoDb"});
    } finally {
        await client.close();
    }
});






app.listen(PORT, () => {
    console.log(`server running at localhost:${PORT}`);
});