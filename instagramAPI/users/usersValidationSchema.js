import Joi from 'joi'

const usersValidationSchema = Joi.object({
   name: Joi.string().required(),
   icon: Joi.binary(),
   subscriptions: Joi.array().items(Joi.string()),
});

export default usersValidationSchema