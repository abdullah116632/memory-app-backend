import dotenv from "dotenv";
dotenv.config();


import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());
app.use("/posts", postRoutes);


const PORT = process.env.PORT || 4000 ;

mongoose
  .connect(process.env.CONNECTION_STRING2, { useNewUrlParser: true})
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running port:${PORT}`))
  )
  .catch((err) => console.log(err.message));
