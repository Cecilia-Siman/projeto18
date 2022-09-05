import { Request, Response } from "express";
import { activatingCard, changingCardStatus } from "../services/changeCardStatusService";
import passwordSchema from "../schemas/passwordSchema";

export async function activateCard(req: Request, res: Response){
    const cardId = res.locals.cardId;
    const cvc: string = req.body.cvc;
    const password: string = req.body.password;
    await activatingCard(cardId, password, cvc);
    res.sendStatus(200);

}

export async function blockCard(req: Request, res: Response){
    const validation = passwordSchema.validate(req.body);
    if (validation.error) {
        return res.status(422).send(validation.error.details);
    }
    const cardId = res.locals.cardId;
    const password: string = req.body.password;
    await changingCardStatus(cardId, password, true);
    res.sendStatus(200);
}

export async function unlockCard(req: Request, res: Response){
    const validation = passwordSchema.validate(req.body);
    if (validation.error) {
        return res.status(422).send(validation.error.details);
    }
    const cardId = res.locals.cardId;
    const password: string = req.body.password;
    await changingCardStatus(cardId, password, false);
    res.sendStatus(200);
}