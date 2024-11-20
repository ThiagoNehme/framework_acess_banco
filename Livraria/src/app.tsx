import React, { useEffect, useState } from 'react';
import { ControleLivros } from './services/ControleLivros';
import { Livro } from './model/Livro';

const App: React.FC = () => {
    const [livros, setLivros] = useState<Livro[]>([]);
    const controleLivros = new ControleLivros();

    const carregarLivros = async () => {
        const livros = await controleLivros.obterLivros();
        setLivros(livros);
    };

    useEffect(() => {
        carregarLivros();
    }, []);

    const excluirLivro = async (id: string) => {
        await controleLivros.excluir(id);
        carregarLivros();
    };

    return (
        <div>
            <h1>Lista de Livros</h1>
            <ul>
                {livros.map((livro) => (
                    <li key={livro._id}>
                        {livro.titulo} - {livro.autor} ({livro.ano})
                        <button onClick={() => excluirLivro(livro._id || '')}>Excluir</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
