import cors from "cors";
import express,  { json }  from "express";
import dotenv from "dotenv";

import router from "./routes";

const app = express();
dotenv.config();
app.use(cors());
app.use(json());

app.use(router);

const PORT = process.env.PORT || 4000;

app.listen(process.env.PORT, () => {
    console.log("Server running on port " + process.env.PORT);
});