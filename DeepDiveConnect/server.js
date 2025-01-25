import express from "express";
import cors from "cors";
const app = express();

const port = 3000;
app.use(cors({origin: "http://localhost:5174"}))

app.get('/', (req, res) => {
    res.send('hola gonorrea');
})