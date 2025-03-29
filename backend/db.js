import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
mongoose.connect(process.env.DB_URL)

const userSchema = new mongoose.Schema(
    {
      email: {
        type: String,
        required: true,
        unique: true,
      },
      fullName: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
        minlength: 6,
      },
      profilePic: {
        type: String,
        default: "",
      },
    },
    { timestamps: true }
  );


  export const User=mongoose.model("User",userSchema)