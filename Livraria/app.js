const express = require('express');
const cors = require('cors');
const livroRouter = require('./routes/livros');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/livros', livroRouter);

app.get('/', (req, res) => {
    res.send('API de Livros está no ar!');
});

module.exports = app;
