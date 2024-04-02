import dotenv from "dotenv";
dotenv.config();

const cloud_name = process.env.CLOUD_NAME;
console.log("abdullah");
console.log(cloud_name)

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());
app.use(express.json())
app.use("/posts", postRoutes);


const port = process.env.PORT || 4000 ;



mongoose.connect(process.env.CONNECTION_STRING2, { useNewUrlParser: true})
  .then((conn) => {
    console.log("DB connection is successful");
  })
  .catch((err) => console.log(err.message));

  const server = app.listen(port, () => console.log(`Server is running at port ${port}`))
