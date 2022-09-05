import { Request, Response } from "express";
import { recharge } from "../services/rechargeService";

export async function rechargeCard(req: Request, res: Response) {
    const cardId: number = res.locals.cardId;
    try{
        const amount: number = Number(req.body.amount);
        await recharge(cardId,amount);
        return res.sendStatus(201);
    }
    catch(error){
        console.log(error);
        return res.sendStatus(500);
    }
}