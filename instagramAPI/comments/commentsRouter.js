import express from 'express'
import { getComments, addComment } from './commentsController.js';
import v from "express-joi-validation";
import commentValidationSchema from './commentsValidationSchema.js';

const commentsRouter = express.Router()

const validation = v.createValidator({});

commentsRouter.get("", getComments);
commentsRouter.post("", validation.body(commentValidationSchema), addComment);

export default commentsRouter;