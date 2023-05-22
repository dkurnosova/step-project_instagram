import Joi from "joi";

const postsValidationSchema = Joi.object({
   userId: Joi.string().required(),
   photo: Joi.binary(),
   likes: Joi.array().items(Joi.string()),
});

export default postsValidationSchema;
