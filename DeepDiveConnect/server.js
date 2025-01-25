import express from "express";
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Home');
})

app.get('/profile', (req, res) => {
    res.send('User Profile');
})

app.get('/contacts', (req, res) => {
    res.send('Contact Cards');
})

app.get('/settings', (req, res) => {
    res.send('Settings');
})

app.listen(port, () => {
    console.log('DeepDive listening on port ${port}')
})

