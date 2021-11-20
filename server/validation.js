const Joi = require("joi");

//Register validation
const registerValidation = (data) => {
    const schema = Joi.object({
        username: Joi.string().min(3).max(30).required(),
        password: Joi.string().min(6).max(30).required(),
        room: Joi.number().integer().required(),
    });
     return Joi.valid(data, schema);
}
const loginValidation = (data) => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().min(3).max(30).required(),
  });
  return Joi.valid(data, schema);
};


module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;