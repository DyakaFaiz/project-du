const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;

app.use(cors());

app.get('/', (req, res) => {
    res.send([
    {
        judul : "Berita 1",
        isi : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ratione, optio nihil quae id animi voluptas officiis. Doloribus ut sunt voluptate a nihil magni amet minus aliquam, sed culpa quo?",
    },
    {
        judul : "Berita 2",
        isi : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ratione, optio nihil quae id animi voluptas officiis. Doloribus ut sunt voluptate a nihil magni amet minus aliquam, sed culpa quo?",
    },
    {
        judul : "Berita 3",
        isi : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ratione, optio nihil quae id animi voluptas officiis. Doloribus ut sunt voluptate a nihil magni amet minus aliquam, sed culpa quo?",
    },
    {
        judul : "Berita 4",
        isi : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis ratione, optio nihil quae id animi voluptas officiis. Doloribus ut sunt voluptate a nihil magni amet minus aliquam, sed culpa quo?",
    },
    ]);
})

app.get('/about', (req, res) => {
    res.send({
        nama : "dyaka faiz",
        text : "About",
    });
})

app.listen(port, () => {
    console.log('server listening on port ', port)
})