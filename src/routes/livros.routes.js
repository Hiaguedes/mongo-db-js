import express from 'express'
import LivroController from '../controllers/livros.controller.js';

const router = express.Router()

router
    .get("/livros", LivroController.getAll)
    .post("/livros", LivroController.post)

export default router;