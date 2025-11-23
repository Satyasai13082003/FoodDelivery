import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://satyasai:satyasai@cluster0.x2pqu.mongodb.net/food-delivery').then(()=>console.log("DB connected"));
    
}