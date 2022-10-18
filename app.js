import * as url from 'url';
import path from 'path';
import express from 'express';
import dotenv from 'dotenv';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

dotenv.config(__dirname)
const PORT = process.env.WEBSERVER_PORT || 8080 ;

const app = express();
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})

app.route('/register')
    .get((req, res) => {
        res.sendFile(path.resolve(__dirname, './views/register.html'));
    })
    .post((req, res) => {
        res.sendFile(path.resolve(__dirname, './views/register.html'));
    })

app.route('/login')
    .get((req, res) => {
        res.sendFile(path.resolve(__dirname, './views/login.html'));
    })
    .post((req, res) => {
        res.sendFile(path.resolve(__dirname, './views/login.html'));
    })


app.listen(PORT, () => {console.log(`Server listening on port ${PORT}`)})
