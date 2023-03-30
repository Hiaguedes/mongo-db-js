import express from 'express'
import HTTP_STATS from './httpStatus.js';

const app = express();

let livros = [
    {id: 1, "titulo": "Senhor dos Aneis"},
    {id: 2, "titulo": "O Hobbit"},
];

app.use(express.json())

app.get('/', (req, res) => {

    res.status(HTTP_STATS.OK).send('Home')
})

app.get('/livros', (req, res) => {
    console.log(livros);

    res.status(HTTP_STATS.OK).send(livros)
})

app.post('/livros', (req, res) => {
    console.log('Adicionando ', req.body)
    livros.push(req.body);
    res.status(HTTP_STATS.CREATED)
    res.send(livros)

})

app.put('/livros/:id', (req, res) => {
    const id = req.params.id
    console.log(id)

    const livro = livros.find((livro) => livro.id === Number(id));
    console.log(livro)

    if(livro === -1) {
        console.log('livro nao encontrado')
        res.status(HTTP_STATS.NO_CONTENT);
        res.send(livros)
    } else {
        console.log('fazendo a edicao')
        livro.titulo = req.body.titulo;
        res.status(HTTP_STATS.OK)
        res.send(livros)
    }
})

app.delete('/livros/:id', (req, res) => {
    const id = req.params.id
    console.log(id)

    const livro = livros.find((livro) => livro.id === Number(id));
    console.log(livro)

    if(livro === -1) {
        console.log('livro nao encontrado')
        res.status(HTTP_STATS.NO_CONTENT);
        res.send(livros)
    } else {
        console.log('fazendo a delecao')

        livros = livros.filter(livro => livro.id !== Number(id))
        res.status(HTTP_STATS.OK)
        res.send(livros)
    }
})

export default app;