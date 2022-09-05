import { any } from "joi";
import { Request, Response } from "express";

export async function createCard(req: Request,res: Response){
    try{
        const companyData = res.locals.companyData;
        const employeeId: number = Number(req.body.employeeId);
        const cardType: string = req.body.cardType;

        return res.send({companyData,employeeId,cardType}).status(200);
    }
    catch(error){
        console.log(error);
        res.sendStatus(500);
    }

}