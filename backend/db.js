import mongoose from "mongoose"
import dotenv from "dotenv"
import { required } from "nodemon/lib/config";
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
      collaborator: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Story",
        },
      ],
    },
    { timestamps: true }
  );
  const storySchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      imageUrl: {
        type: String,
      },
      authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      genre: [
        {
          type: String,
          enum: ["Fantasy", "Science Fiction", "Mystery", "Romance"],
          required: true,
        },
      ],
    },
    { timestamps: true }
  );
  

  export const User=mongoose.model("User",userSchema)
  export const Story=mongoose.model("Story",userSchema)