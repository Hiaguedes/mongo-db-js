import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        id: { type: String },
        title: { type: String, required: true },
        author: { type: String, required: true },
        editor: { type: String, required: true },
        pages: { type: Number },
    }
)

const livros = mongoose.model('livros', livroSchema);

export default livros;