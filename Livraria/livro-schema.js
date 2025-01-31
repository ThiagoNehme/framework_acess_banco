const banco = require('./conexao');

const LivroSchema = new banco.Schema({
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    ano: { type: Number, required: true },
});

const Livro = banco.model('Livro', LivroSchema, 'livros');

module.exports = Livro;
