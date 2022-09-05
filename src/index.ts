import cors from "cors";
import express,  { json }  from "express";
import dotenv from "dotenv";
import 'express-async-errors';

import router from "./routes";
import errorHandler from "./middlewares/errorHandler";

const app = express();
dotenv.config();
app.use(cors());
app.use(json());

app.use(router);


app.use(errorHandler);

const PORT = process.env.PORT || 4000;

app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
});