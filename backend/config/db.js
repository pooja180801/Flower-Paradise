import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://flowerparadise:18082001pk@cluster0.uwqabev.mongodb.net/flower-paradise');
    console.log("DB connected");
  } catch (error) {
    console.error("DB connection error:", error);
  }
};
