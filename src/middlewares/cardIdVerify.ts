import { Request, Response, NextFunction } from "express";

export async function cardIdVerify(req:Request,res:Response,next:NextFunction) {
    const cardId: number = Number(req.params.id);
    res.locals.cardId = cardId;
    if (!cardId){
        return res.sendStatus(404);
    }
    next();
}