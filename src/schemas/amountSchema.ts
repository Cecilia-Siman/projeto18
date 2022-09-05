import joi from 'joi';

const amountSchema = joi.object({
    amount: joi.number().greater(0).required(),
});

export default amountSchema;