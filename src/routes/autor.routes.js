import express from 'express'
import AutorController from '../controllers/autores.controller.js';

const router = express.Router()

router
    .get("/autores", AutorController.getAll)
    .post("/autores", AutorController.post)
    .put("/autores/:id", AutorController.update)
    .get("/autores/:id", AutorController.findById)
    .delete("/autores/:id", AutorController.delete)

export default router;