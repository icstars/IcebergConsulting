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

//Retrieving all columns from database table
app.get('/employees', (req, res) => {
    const query = 'SELECT * from thresholds.employees';
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

//Retrieving data based on search in the app
app.get('/employees/:search', (req, res) => {
    const query = `SELECT * from thresholds.employees WHERE display_name LIKE '%${req.params.search}%' OR program_name LIKE '%${req.params.search}%' OR street_address LIKE '%${req.params.search}%' OR office_location LIKE '%${req.params.search}%' OR job_title LIKE '%${req.params.search}%'`;
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

