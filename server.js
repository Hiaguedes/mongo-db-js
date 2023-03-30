import app from './src/app.js'

const PORT = process.env.PORT || 3500;

app.listen(PORT, () => {
    console.log(`Escutando na porta ${PORT} em http://localhost:${PORT}`)
});