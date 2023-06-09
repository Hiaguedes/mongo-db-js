import express from 'express'
import LivroController from '../controllers/livros.controller.js';

const router = express.Router()

router
    .get("/livros", LivroController.getAll)
    .get("/livros/busca?:authorId", LivroController.findByAuthor)
    .post("/livros", LivroController.post)
    .put("/livros/:id", LivroController.update)
    .get("/livros/:id", LivroController.findById)
    .delete("/livros/:id", LivroController.delete)

export default router;