const express = require('express');
const cors = require('cors');
const sql = require('mssql');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json()); // Allows parsing JSON bodies

// MSSQL Configuration Object
const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    port: 1433,
    options: {
        encrypt: false, // Use true if connecting to Azure SQL
        trustServerCertificate: true // Change to false for production
    }
};

// Connect to SQL Server and Start Server
sql.connect(dbConfig)
    .then(pool => {
        if (pool.connected) {
            console.log('Connected to MSSQL Database successfully.');
        }
    })
    .catch(err => console.error('Database Connection Failed:', err));

app.get('/api/Experience', async (req, res) => {
    try {
        const result = await sql.query`SELECT * FROM Experience ORDER BY StartYear DESC`;
        res.json(result.recordset); // Returns raw array of rows
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/Qualifications', async (req, res) => {
    try {
        const result = await sql.query`SELECT * FROM Qualifications ORDER BY Year DESC`;
        res.json(result.recordset); // Returns raw array of rows
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/api/Projects', async (req, res) => {
    try {
        const result = await sql.query`SELECT * FROM Projects ORDER BY Active DESC, Title`;
        res.json(result.recordset); // Returns raw array of rows
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
