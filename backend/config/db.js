import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export const connectDb=async()=>{
    try{
       const conn=await mongoose.connect(process.env.MONGO_URI);
       console.log(`mongodb connected : ${conn.connection.host}`); 
    }catch(error){
        console.error(`error :${error.message}`);
        process.exit(1);
    }
};