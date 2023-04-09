import mongoose from "mongoose";
import dotenv from "./dotenv.config.js";

dotenv.config();

mongoose.connect(`mongodb+srv://hiaguedes:${process.env.MAIN_PASSWORD}@cluster-0.egzys.mongodb.net/alura-node`);

const db = mongoose.connection

export default db;