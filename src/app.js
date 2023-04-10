import express from 'express'
import db from './config/connectDB.js';
import routes from './routes/index.js';

db.on("error", console.log.bind(console, 'Error de conexao com o banco'));
db.once("open", () => {
    console.log('Conexao feita com sucesso');
})

const app = express();

routes(app);

// app.delete('/livros/:id', (req, res) => {
//     const id = req.params.id
//     console.log(id)

//     const livro = livros.find((livro) => livro.id === Number(id));
//     console.log(livro)

//     if(livro === -1) {
//         console.log('livro nao encontrado')
//         res.status(HTTP_STATS.NO_CONTENT);
//         res.send(livros)
//     } else {
//         console.log('fazendo a delecao')

//         livros = livros.filter(livro => livro.id !== Number(id))
//         res.status(HTTP_STATS.OK)
//         res.send(livros)
//     }
// })

export default app;