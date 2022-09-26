const Joi = require('joi');

const UserValidations = {
    createUser : {
        body: Joi.object({
            firstName: Joi.string().alphanum().min(3).max(30).required(),
            lastName: Joi.string().alphanum().min(3).max(30).required(),
        })
    }
}

module.exports = UserValidations;