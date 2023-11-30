import express from "express";
import asyncHandler from "express-async-handler";
import { ProductModel } from "../models/productModel";
import { sampleProducts } from "../data";

export const SeedRouter = express.Router()

SeedRouter.get(
  "/",
  asyncHandler(async (req, res) => {
    await ProductModel.deleteMany({});
    const createdProducts = await ProductModel.insertMany(sampleProducts);
    res.json({ createdProducts })
  })
)
