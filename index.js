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


//ttB3qe6ce01hkIPt

const CONNECTION_URL =
  "mongodb+srv://abdullah:ttB3qe6ce01hkIPt@cluster0.rktpia1.mongodb.net/post?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000 ;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopoLogy: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running port:${PORT}`))
  )
  .catch((err) => console.log(err.message));
