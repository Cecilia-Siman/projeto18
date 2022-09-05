import joi from 'joi';

const purchaseSchema = joi.object({
    cardId: joi.number().required(),
    password: joi.string().required(),
    shopId: joi.number().required(),
    amount: joi.number().greater(0).required(),
});

export default purchaseSchema;
