import express from 'express'
import db from './config/connectDB.js';
import routes from './routes/index.js';

db.on("error", console.log.bind(console, 'Error de conexao com o banco'));
db.once("open", () => {
    console.log('Conexao feita com sucesso');
})

const app = express();

routes(app);

export default app;