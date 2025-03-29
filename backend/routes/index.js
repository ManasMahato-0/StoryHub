import express from "express"
import userrouter from "./user.js"
import storyrouter from "./story.js"
const router=express.Router()

router.use("/user",userrouter)
router.use("/story",storyrouter)
export default router;