import Joi from "joi";

const commentValidationSchema = Joi.object({
  postId: Joi.string().required(),
  text: Joi.string().required(),
  userId: Joi.string().required(),
});

export default commentValidationSchema;
