import livros from "../models/Livro.js";
import HTTP_STATS from "../httpStatus.js";

class LivroController {
     static getAll(req, res) {
        livros.find((err, livros) => {
            res.status(HTTP_STATS.OK).json(livros)
            
        })

        return livros;
     }
}

export default LivroController;