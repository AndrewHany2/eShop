import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/error.js";

dotenv.config();
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(
  5000,
  console.log(`server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
