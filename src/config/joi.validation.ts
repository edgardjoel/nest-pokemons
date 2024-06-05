import * as joi from 'joi';

export const JoiValidationSchema = joi.object({
  MONGODB: joi.string().required().default('mongodb://localhost:27017/pokedex'),
  PORT: joi.number().default(3005),
  DEFAULT_LIMIT: joi.number().default(7),
});
