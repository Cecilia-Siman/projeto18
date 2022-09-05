import { Request, Response, NextFunction } from "express";
import {findByApiKey }from "../repositories/companyRepository"

export async function apiKeyVerify(req:Request,res:Response,next:NextFunction) {
    const apikey: string = String(req.headers.apikey);
    try{
        const companyData = await findByApiKey(apikey); 
        if (!companyData){
            return res.sendStatus(404);
        }
        else{
            res.locals.companyData = companyData;
        }
        next();
    }
    catch(error){
        res.sendStatus(500);
        next();
    }

    next();
    
}