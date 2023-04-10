import livros from "../models/Livro.js";
import HTTP_STATS from "../httpStatus.js";

class LivroController {
     static getAll(req, res) {
        livros.find((err, livros) => {
            res.status(HTTP_STATS.OK).json(livros)
            
        })
     }

     static async post(req, res) {
        try {
            const livro = new livros(req.body);
            await livro.save();
            res.status(HTTP_STATS.CREATED).send(livro.toJSON())
        } catch (err) {
            res.status(HTTP_STATS.SERVER_ERROR);
            res.send({ message: `Error na hora de salvar o livro: ${err?.message}` })

        }
     }
}

export default LivroController;