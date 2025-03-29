import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose.connect(process.env.DB_URL);

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
      content: {
        type: String,
        required: true,
      },
      imageUrl: {
        type: String,
      },
      likes: {
        type: Number,
        default: 0,
      },
      authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      collaborators: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User", // Reference to User model
        },
      ],
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

const commentSchema = new mongoose.Schema(
  {
    storyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Story",
      required: true,
    },
    comments: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);


// Google Loggedin User Schema & Model
const GoogleLoddedinUserSchema = new mongoose.Schema({
  name: String,
  email: String
});

export const User = mongoose.model("User", userSchema);
export const Story = mongoose.model("Story", storySchema);
export const Comment = mongoose.model("Comment", commentSchema);
export const GoogleLoddedin = mongoose.model("GoogleLoddedinUserSchema", GoogleLoddedinUserSchema);
