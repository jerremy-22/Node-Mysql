const express = require ('express');
const mysql = require ('mysql2');
const app  =express();
const  PORT = 3000;

app.use(express.json()); // Parse JSON requests

// Create a MySQL connection 
const db = mysql.createConnection({
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

// CRUD routes
app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});
