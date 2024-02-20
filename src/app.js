import express from "express";
import morgan from "morgan";
import productRouter from "./routes/products.routes.js";
import { config } from "dotenv";
config();

const app = express();  // Aquí defines la variable 'app'

// SETTINGS
app.set('view engine', 'ejs');

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use('/', productRouter);

export default app;  // Aquí exportas la variable 'app'
