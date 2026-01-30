/* const express = require ('express');
//const mysql = require ('mysql2');
const app  =express();
const  PORT = 3000;
import { MongoClient, Db } from 'mongodb';

app.use(express.json()); // Parse JSON requests

console.log('Server is running on port', PORT);



const uri = 'mongodb+srv://root:<db_password>@cluster0.ruxxqzc.mongodb.net/?appName=Cluster0';

let db = Db;

export async function connectDB() {
  const client = new MongoClient(uri);
  await client.connect();

  db = client.db('myapp'); // database name
  console.log('MongoDB connected');
}

export function getDB() {
  if (!db) {
    throw new Error('Database not initialized');
  }
  return db;
}


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
 */
// Create a MySQL connection 
/* const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // leave empty if no password
    database: 'testdb'
});

// Connect to MySQL
db.connect((err) => {
    if (!err) {
        console.log('MySQL Connected!');
    }
});
 */
// CRUD routes
/* app.get('/api/users', (req, res) => {
    console.log('Fetching all users');
    db.query('SELECT * FROM users', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});
 */


import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './src/userRoutes';
import { MongoClient } = from 'mongodb';

const app = express();
const PORT = 3000;

app.use(express.json());

const uri = 'mongodb+srv://root:Pa$$w0rd@cluster0.ruxxqzc.mongodb.net';

let db;

async function connectDB() {
    const client = new MongoClient(uri);
    await client.connect();
    db = client.db('myapp');
    console.log('MongoDB connected');
}

function getDB() {
    if (!db) throw new Error('Database not initialized');
    return db;
}

// connect first, then start server
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(console.error);


const { ObjectId } = require('mongodb');

app.post('/api/users', async (req, res) => {
    try {
        const db = getDB();
        const user = req.body;

        const result = await db.collection('users').insertOne(user);

        res.status(201).json({
            _id: result.insertedId,
            ...user
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.get('/api/users', async (req, res) => {
  try {
    const db = getDB();
    const users = await db.collection('users').find().toArray();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
