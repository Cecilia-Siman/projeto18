import { any } from "joi";
import { Request, Response } from "express";
import { cardData } from "../services/createCardService";
import { TransactionTypes } from "../repositories/cardRepository";

export async function createCard(req: Request,res: Response){
    try{
        const companyData = res.locals.companyData;
        const employeeId: number = Number(req.body.employeeId);
        const cardType: TransactionTypes = req.body.cardType;
        cardData(employeeId,cardType);
        res.sendStatus(201);
    }
    catch(error){
        console.log(error);
        res.sendStatus(500);
    }

}