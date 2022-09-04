import { Request, Response, NextFunction } from "express";
import { findById } from "../repositories/cardRepository";

export async function cardIdVerify(req:Request,res:Response,next:NextFunction) {
    const cardId: number = Number(req.params.id);
    res.locals.cardId = cardId;
    try{
    const card = await findById(cardId);
    if (!card){
        return res.sendStatus(404);
    }
    else{
        res.send(card);
    }
    next();
    }
    catch(error){
        console.log(error);
        next();
    }
    
}