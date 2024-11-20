const express = require('express');
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

const router = express.Router();

router.get('/', async (req, res) => {
    const livros = await obterLivros();
    res.json(livros);
});

router.post('/', async (req, res) => {
    try {
        await incluir(req.body);
        res.status(201).json({ mensagem: 'Livro incluído com sucesso!' });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao incluir livro.', erro: error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await excluir(req.params.id);
        res.status(200).json({ mensagem: 'Livro excluído com sucesso!' });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro ao excluir livro.', erro: error });
    }
});

module.exports = router;
