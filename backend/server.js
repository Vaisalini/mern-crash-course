import express from 'express';
//import dotenv from 'dotenv';
import { connectDb } from './config/db.js';
import productRoutes from './routes/product.route.js';
import cors from 'cors';
//dotenv.config();


const app=express();
app.use(cors());
app.use(express.json());

app.use("/",productRoutes);



app.listen(5000,()=>{
    connectDb();
    console.log("server started at http://localhost:5000");
})

