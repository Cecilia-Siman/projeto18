import { Request, Response } from "express";
import { balanceCalculus } from "../services/balanceService";

export async function cardBalance(req: Request, res: Response) {
    const cardId: number = Number(res.locals.cardId);
    const objReturn = await balanceCalculus(cardId);
    res.send(objReturn).status(200);
}