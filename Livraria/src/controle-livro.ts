import axios from 'axios';
import { Livro } from './model/Livro';

const baseURL = 'http://localhost:3030/livros';

export class ControleLivros {
    async obterLivros(): Promise<Livro[]> {
        const response = await axios.get<Livro[]>(baseURL);
        return response.data;
    }

    async incluir(livro: Livro): Promise<boolean> {
        const response = await axios.post(baseURL, livro);
        return response.status === 201;
    }

    async excluir(id: string): Promise<boolean> {
        const response = await axios.delete(`${baseURL}/${id}`);
        return response.status === 200;
    }
}
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Livro } from '../model/livro';

const baseURL = 'http://localhost:3030/livros';

@Injectable({
    providedIn: 'root',
})
export class ControleLivrosService {
    async obterLivros(): Promise<Livro[]> {
        const response = await axios.get<Livro[]>(baseURL);
        return response.data;
    }

    async incluir(livro: Livro): Promise<boolean> {
        const response = await axios.post(baseURL, livro);
        return response.status === 201;
    }

    async excluir(id: string): Promise<boolean> {
        const response = await axios.delete(`${baseURL}/${id}`);
        return response.status === 200;
    }
}
