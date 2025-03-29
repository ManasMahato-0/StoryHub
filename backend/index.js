import express from "express"
import rootRouter from "./routes/index.js"
import fileUpload from "express-fileupload";
import path from "path";
import cors from "cors"
const app=express()
app.use(cors())
app.use(express.json());
const __dirname = path.resolve();
app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: path.join(__dirname, "tmp"),
		createParentPath: true,
		limits: {
			fileSize: 10 * 1024 * 1024,
		},
	})
);
app.use("/api/v1", rootRouter);
app.listen(process.env.port || 3000);