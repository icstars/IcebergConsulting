import express from "express";
import cors from "cors";
import mysql from "mysql2";

const app = express();


const port = 3000;
app.use(cors({origin: 'http://localhost:5173' }));

//Connect to mySQL database
const db = mysql.createConnection({
    host: 'thresholds-test.mysql.database.azure.com',
    user: 'test',
    port: 3306,
    password: 'test',
    database: 'thresholds',
});

//Connection status message
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

app.get('/employees', (req, res) => {
    const query = 'SELECT * from thresholds.employees'
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error retrieving employees', err);
            res.status(500).json({ error: 'Error retrieving employees'})
        } else {
            console.log(typeof(results));
            res.json(results);
        }
    });
})

app.get('/employees/:search', (req, res) => {
    const query = `SELECT * from thresholds.employees WHERE display_name OR office_location OR program_name OR city LIKE '%${req.params.search}%'`;
    console.log(req.params);
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error retrieving employees', err);
            res.status(500).json({ error: 'Error retrieving employees'})
        } else {
            console.log(typeof(results));
            res.json(results);
        }
    });
})


//Start the app
app.listen(port, () => {
    console.log(`DeepDive listening on port ${port}`)
})

