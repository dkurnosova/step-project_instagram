import express from "express";
import usersRouter from "./users/usersRouter.js";
import commentsRouter from "./comments/CommentsRouter.js";
import postsRouter from "./posts/postsRouter.js";
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/users', usersRouter)
app.use("/comments", commentsRouter);
app.use("/posts", postsRouter);

export default app