import Joi from 'joi';

const palabraSchema = Joi.object({
  palabra: Joi.string()
  .min(3)
  .max(10)
  .required()
  .trim()
});

export { palabraSchema };
