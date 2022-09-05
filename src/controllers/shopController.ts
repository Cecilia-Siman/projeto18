import { Request, Response } from "express";
import { purchasePOS } from "../services/shopService";

export async function purchase(req: Request, res: Response) {
    try{
        const cardId: number = Number(req.body.cardId);
        const password: string = req.body.password;
        const shopId: number = Number(req.body.shopId);
        const amount: number = Number(req.body.amount);
        await purchasePOS(cardId,password,shopId,amount);
        res.sendStatus(200);
    }
    catch(error){
        console.log(error);
    }
    
}