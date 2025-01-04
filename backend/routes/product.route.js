import express from 'express';
import Product from '../models/product.model.js';
import mongoose from "mongoose";
import { createProduct, deleteProduct, getProducts, updateProduct } from '../controllers/product.controller.js';
const router=express.Router();


router.post("/products",createProduct);

router.delete("/products/:id",deleteProduct);

router.get("/products",getProducts);

router.put("/products/:id",updateProduct);

export default router;