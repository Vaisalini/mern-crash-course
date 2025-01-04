import Product from "../models/product.model.js";
import mongoose from "mongoose";
export const getProducts=async(req,res)=>{
    try {
        const products=await Product.find();
        res.status(200).json({success:true,message:"retreived all products",data:products});
    } catch (error) {
        res.json({success:false,message:"couldnt retrieve"});
        
    }
}

export const createProduct=async(req,res)=>{
    const product=req.body;

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success : false , message : "please provide all fields"});
    }

    const newprod=new Product(product);

    try{
         await newprod.save();
         res.status(201).json({success:true ,data : newprod});
    }catch(error){
        console.error(error.message);
        res.status(500).json({success : false ,message : "internal server error" });
    }

}

export const deleteProduct=async(req,res)=>{
    const {id}=req.params;
    console.log("id : ",id);
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success:true,message:"product deleted"});
    } catch (error) {
        res.json({success:false,message:"product not found"});
        
    }
}

export const updateProduct=async(req,res)=>{
    const {id}=req.params;
    const data=req.body;
    try {
        const updatedProd=await Product.findByIdAndUpdate(id,data,{new:true});
        res.status(200).json({success:true,message:"done",updatedone : updatedProd});
    } catch (error) {
        res.json({success:false,message:error.message});
        
    }
}
