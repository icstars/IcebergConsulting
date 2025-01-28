import express from "express";
import cors from "cors";
const app = express();

const port = 3000;
app.use(cors({origin: 'http://localhost:5174' }));

app.get('/', (req, res) => {
    res.send('Home');
})

app.get('/locations', (req, res) => {
    res.send('Locations');
})

app.get('/contacts', (req, res) => {
    res.send('Contact Cards');
})

app.get('/resources', (req, res) => {
    res.send('Resources');
})

app.listen(port, () => {
    console.log(`DeepDive listening on port ${port}`)
})

