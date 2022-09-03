import { Request, Response } from "express";

export async function rechargeCard(req: Request, res: Response) {
    const cardId: number = res.locals.cardId;
    try{
        const amount: number = Number(req.body.amount);
    }
    catch(error){
        console.log(error);
    }
}