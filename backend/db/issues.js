import mongoose from "mongoose";
import dotenv from "dotenv";
import { User } from "../db";

dotenv.config();
mongoose.connect(process.env.DB_URL);

const issueSchema = new mongoose.Schema(
    User.schema,
    {
        storyId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Story",
            required: true,
        },
        issueDescription: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ["pending", "resolved"],
            default: "pending",
        },
    },
    { timestamps: true }
)