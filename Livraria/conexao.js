const mongoose = require('mongoose');

const banco = mongoose;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect('mongodb://localhost:27017/livraria', options)
    .then(() => console.log('Conexão com MongoDB bem-sucedida!'))
    .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

module.exports = banco;
