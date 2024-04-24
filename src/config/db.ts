import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connectToDB = async () => {
  const mongo_url = process.env.MONGO_URL;
  if (!mongo_url) throw new Error("MONGO_URL is not defined");

  mongoose.connect(mongo_url);
};

export const closeConnection = async () => {
  mongoose.connection.close();
};

export default connectToDB;
