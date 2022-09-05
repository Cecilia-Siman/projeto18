import { Request, Response } from "express";
import { recharge } from "../services/rechargeService";
import amountSchema from "../schemas/amountSchema";

export async function rechargeCard(req: Request, res: Response) {
    const cardId: number = res.locals.cardId;
    const validation = amountSchema.validate(req.body);
    if (validation.error) {
        return res.status(422).send(validation.error.details);
    }
    const amount: number = Number(req.body.amount);
    await recharge(cardId,amount);
    return res.sendStatus(201);
}