import { Request, Response } from "express";
import { activatingCard, changingCardStatus } from "../services/changeCardStatusService";

export async function activateCard(req: Request, res: Response){
    const cardId = res.locals.cardId;
    try{
        const cvc: string = req.body.cvc;
        const password: string = req.body.password;
        await activatingCard(cardId, password, cvc);
        res.sendStatus(200);
    }
    catch(error){
        return res.sendStatus(500);
    }
}

export async function blockCard(req: Request, res: Response){
    const cardId = res.locals.cardId;
    try{
        const password: string = req.body.password;
        await changingCardStatus(cardId, password, true);
        res.sendStatus(200);
    }
    catch(error){
        console.log(error);
        return res.sendStatus(500);
    }
}

export async function unlockCard(req: Request, res: Response){
    const cardId = res.locals.cardId;
    try{
        const password: string = req.body.password;
        await changingCardStatus(cardId, password, false);
        res.sendStatus(200);
    }
    catch(error){
        console.log(error);
        return res.sendStatus(500);
    }
}