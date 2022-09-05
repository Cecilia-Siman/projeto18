import { Request, Response } from "express";
import { purchasePOS } from "../services/shopService";
import purchaseSchema from "../schemas/purchaseSchema";

export async function purchase(req: Request, res: Response) {
    const validation = purchaseSchema.validate(req.body);
    if (validation.error) {
        return res.status(422).send(validation.error.details);
    }
    const cardId: number = Number(req.body.cardId);
    const password: string = req.body.password;
    const shopId: number = Number(req.body.shopId);
    const amount: number = Number(req.body.amount);
    await purchasePOS(cardId, password, shopId, amount);
    res.send('purchased');

}