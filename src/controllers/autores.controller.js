import autores from "../models/Autor.js";
import HTTP_STATS from "../httpStatus.js";

class AutoresController {
     static getAll(req, res) {
        autores.find((err, autores) => {
            res.status(HTTP_STATS.OK).json(autores)
            
        })
     }

     static async post(req, res) {
        try {
            const autor = new autores(req.body);
            await autor.save();
            res.status(HTTP_STATS.CREATED).send(autor.toJSON())
        } catch (err) {
            res.status(HTTP_STATS.SERVER_ERROR);
            res.send({ message: `Error na hora de salvar o autor: ${err?.message}` })

        }
     }

    static update(req, res) {
        const id = req.params.id
        autores.findByIdAndUpdate(id, {
            $set: req.body,
        }, (err) => {
            if(err){
                res.status(HTTP_STATS.SERVER_ERROR);
                res.send({ message: `Problema ao atualizar o autor: ${err}` });
            }else {
                res.status(HTTP_STATS.OK);
                res.send({ message: 'Autor atualizado com sucesso' })
            }
        })
     }

     static findById(req, res) {
        const id = req.params.id;

        autores.findById(id, (err, autores) => {
            if(err){
                res.status(HTTP_STATS.NOT_FOUND);
                res.send({ message: `Problema ao buscar o autor pelo Id: ${err}` });
            } else {
                res.status(HTTP_STATS.OK);
                res.send(autores);
            }
        })
     }

     static delete(req, res) {
        const id = req.params.id;

        autores.findByIdAndDelete(id, (err) => {
            if(err){
                res.status(HTTP_STATS.NOT_FOUND);
                res.send({ message: `Problema ao buscar o autor pelo Id: ${err}` });
            } else {
                res.status(HTTP_STATS.OK);
                res.send({ message: 'autor deletado com sucesso' });
            }
        })
     }
}



export default AutoresController;