import { Request, Response } from "express";

export async function activateCard(req: Request, res: Response){
    const cardId = res.locals.cardId;
    try{
        const cvc: number = Number(req.body.cvc);
        const password: string = req.body.password;
        
    }
    catch(error){
        console.log(error);
    }
}

export async function blockCard(req: Request, res: Response){
    const cardId = res.locals.cardId;
    try{
        const password: string = req.body.password;
    }
    catch(error){
        console.log(error);
    }
}

export async function unlockCard(req: Request, res: Response){
    const cardId = res.locals.cardId;
    try{
        const password: string = req.body.password;
    }
    catch(error){
        console.log(error);
    }
}