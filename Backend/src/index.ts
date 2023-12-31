import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { productRouter } from "./routers/productRouter";
import { SeedRouter } from "./routers/seedRouter";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/tsprazonadb";
mongoose.set("strictQuery", true);

mongoose.connect(MONGODB_URI)
.then(() => {
  console.log("connected to mongodbbbb")
})
.catch(() => {
  console.log("error mongodb")
})


const app = express();
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5173"],
  })
);

app.use('/api/products', productRouter)
app.use('/api/seed', SeedRouter)

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
