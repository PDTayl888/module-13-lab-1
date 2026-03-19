const express = require('express');
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = 3001;

const uri = process.env.MONGO_URI;

