import express from 'express'
import { getPosts, addPost } from './postsController.js';
import v from "express-joi-validation";
import multer from "multer";
import postsValidationSchema from './postsValidationSchema.js';

const postsRouter = express.Router()

const validation = v.createValidator({});
const upload = multer({ storage: multer.memoryStorage() });

postsRouter.get("", getPosts);
postsRouter.post("", upload.single('photo'),validation.body(postsValidationSchema), addPost);

export default postsRouter;