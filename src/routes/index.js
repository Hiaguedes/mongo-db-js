import express from 'express';
import livrosRoutes from './livros.routes.js'
import autoresRoutes from './autor.routes.js'
import HTTP_STATS from '../httpStatus.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(HTTP_STATS.OK).send('Cursos!!');
    });

    app.use(
        express.json(),
        livrosRoutes,
        autoresRoutes,
    )
}

export default routes;