import { any } from "joi";
import { Request, Response } from "express";
import { cardData } from "../services/createCardService";
import { TransactionTypes } from "../repositories/cardRepository";
import createSchema from "../schemas/createSchema";

export async function createCard(req: Request,res: Response){
    const validation = createSchema.validate(req.body);
    if (validation.error) {
        return res.status(422).send(validation.error.details);
    }
    const employeeId: number = Number(req.body.employeeId);
    const cardType: TransactionTypes = req.body.cardType;
    await cardData(employeeId,cardType);
    res.send('card created').status(201);
}