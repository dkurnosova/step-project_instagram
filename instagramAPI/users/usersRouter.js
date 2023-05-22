import express from 'express'
import { getUsers, addUser } from './usersController.js';
import v from 'express-joi-validation'
import multer from 'multer'
import usersValidationSchema from './usersValidationSchema.js';

const usersRouter = express.Router()

const validation = v.createValidator({})
const upload = multer({ storage: multer.memoryStorage() });

usersRouter.get('', getUsers)

usersRouter.post("", upload.single("icon"), validation.body(usersValidationSchema), addUser);

export default usersRouter