import { Request, Response } from "express";

export async function purchase(req: Request, res: Response) {
    const cardId = res.locals.cardId;
    try{
        const password: string = req.body.password;
        const shopId: number = Number(req.body.shopId);
        const price: number = Number(req.body.price);
    }
    catch(error){
        console.log(error);
    }
    
}