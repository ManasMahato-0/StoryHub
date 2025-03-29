import express from "express";
import { authMiddleware } from "../middleware.js";
import { Story, User } from "../db.js";
import cloudinary from "cloudinary";

const router = express.Router();

const uploadToCloudinary = async (file) => {
    try {
        const result = await cloudinary.uploader.upload(file.tempFilePath, {
            resource_type: "auto",
        });
        return result.secure_url;
    } catch (error) {
        console.log("Error in uploadToCloudinary", error);
        throw new Error("Error uploading to Cloudinary");
    }
};
router.post("/post", authMiddleware, async (req, res) => {
    try {
        // if (!req.files || !req.files.imageFile) {
        //     return res.status(400).json({ message: "Upload all files" });
        // }
        // const imageFile = req.files.imageFile;
        const imageUrl =  null;
        const { title, description, content, likes, genre } = req.body;
        const authorId = req.userId;
        const story = await Story.create({
            title,
            imageUrl,
            description,
            content,
            likes,
            authorId,
            genre,
        });

        return res.status(201).json(story);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Error while uploading story" });
    }
});

router.get("/all", authMiddleware, async (req, res) => {
    try {
        const stories = await Story.find();
        return res.status(200).json(stories);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Error while fetching stories" });
    }
});

router.get("/story/:id", authMiddleware,async (req, res) => {
    try {
        const { id } = req.params;
        const story = await Story.findById(id);

        if (!story) {
            return res.status(404).json({ message: "Story not found" });
        }

        return res.status(200).json(story);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Error while fetching story" });
    }
});

router.get("/most-liked", authMiddleware,async (req, res) => {
    try {
        const stories = await Story.find().sort({ likes: -1 }).limit(10);
        return res.status(200).json(stories);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Error while fetching most-liked stories" });
    }
});
router.get("/genre",authMiddleware, async (req, res) => {
    try {
        const { name } = req.query; 
        if (!name) {
            return res.status(400).json({ message: "Genre is required" });
        }
        const stories = await Story.find({ genre: name });
        if (stories.length === 0) {
            return res.status(404).json({ message: "No stories found for this genre" });
        }
        return res.status(200).json(stories);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Error while fetching stories of this genre" });
    }
});

router.get("/story", authMiddleware, async (req, res) => {
    try {
        const userId = req.userId;

        const stories = await Story.find({ authorId: userId });

        return res.status(200).json(stories);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Error while fetching stories of this user" });
    }
});
router.get("/collaborations", authMiddleware, async (req, res) => {
    try {
        const userId = req.userId;
        const stories = await Story.find({ collaborators: userId });
        return res.status(200).json(stories);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Error while fetching collaborations" });
    }
});
router.put("/edit/:id", authMiddleware, async (req, res) => {
    try {
        const userId = req.userId; 
        const { id } = req.params;
        const { title, description, content, imageUrl, genre } = req.body;
        const story = await Story.findById(id);
        if (!story) {
            return res.status(404).json({ message: "Story not found" });
        }
        const isAuthorized = story.authorId.equals(userId) || story.collaborators.includes(userId);
        if (!isAuthorized) {
            return res.status(403).json({ message: "You are not authorized to edit this story" });
        }
        story.title = title || story.title;
        story.description = description || story.description;
        story.content = content || story.content;
        story.imageUrl = imageUrl || story.imageUrl;
        story.genre = genre || story.genre;

        await story.save();

        return res.status(200).json({ message: "Story updated successfully", story });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error while updating story" });
    }
});

router.get("/can-edit/:id", authMiddleware, async (req, res) => {
    try {
        const userId = req.userId; 
        const story = await Story.findById(id);
        if (!story) {
            return res.status(404).json({ message: "Story not found" });
        }
        const isAuthorized = story.authorId.equals(userId) || (story.collaborators && story.collaborators.includes(userId));
        return res.status(200).json({ canEdit: isAuthorized });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error while checking permissions" });
    }
});

router.get("/author/:id", authMiddleware, async (req, res) => {
    try {
        const { id } = req.params;
        const author = await User.findById(id).select("-password");

        if (!author) {
            return res.status(404).json({ message: "Author not found" });
        }

        return res.status(200).json(author);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error while fetching author information" });
    }
});

router.post("/collaborate/:id", authMiddleware, async (req, res) => {
    try {
        const userId = req.userId;
        const { id } = req.params;

        const story = await Story.findById(id);
        if (!story) {
            return res.status(404).json({ message: "Story not found" });
        }

        if (story.authorId.equals(userId)) {
            return res.status(400).json({ message: "You are already the author of this story" });
        }

        if (story.collaborators && story.collaborators.includes(userId)) {
            return res.status(400).json({ message: "You are already a collaborator on this story" });
        }

        story.collaborators = story.collaborators || [];
        story.collaborators.push(userId);

        await story.save();

        return res.status(200).json({ message: "Successfully added as a collaborator", story });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error while adding collaborator" });
    }
});
export default router;
