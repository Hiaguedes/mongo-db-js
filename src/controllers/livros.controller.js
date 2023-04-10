import livros from "../models/Livro.js";
import HTTP_STATS from "../httpStatus.js";

class LivroController {
     static getAll(req, res) {
        livros.find()
        .populate('author')
        .exec((err, livros) => {
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

    static update(req, res) {
        const id = req.params.id
        livros.findByIdAndUpdate(id, {
            $set: req.body,
        }, (err) => {
            if(err){
                res.status(HTTP_STATS.SERVER_ERROR);
                res.send({ message: `Problema ao atualizar o livro: ${err}` });
            }else {
                res.status(HTTP_STATS.OK);
                res.send({ message: 'Livro atualizado com sucesso' })
            }
        })
     }

     static findById(req, res) {
        const id = req.params.id;

        livros.findById(id)
        .populate('author')
        .exec((err, livros) => {
            if(err){
                res.status(HTTP_STATS.NOT_FOUND);
                res.send({ message: `Problema ao buscar o livro pelo Id: ${err}` });
            } else {
                res.status(HTTP_STATS.OK);
                res.send(livros);
            }
        })
     }

     static delete(req, res) {
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err) => {
            if(err){
                res.status(HTTP_STATS.NOT_FOUND);
                res.send({ message: `Problema ao buscar o livro pelo Id: ${err}` });
            } else {
                res.status(HTTP_STATS.OK);
                res.send({ message: 'Livro deletado com sucesso' });
            }
        })
     }
}



export default LivroController;