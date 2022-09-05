import { insert } from "../repositories/rechargeRepository";
import { findById } from "../repositories/cardRepository";
import { isValid, isActive } from "./validCardService";

export async function recharge(id: number, amount: number){
    /*const valid = await isValid(id);
    if (!valid){
        throw {code:'Not Valid', message:'Card not valid'};
    }
    const active = await isActive(id);
    if(!active){
        throw {code:'Not Valid', message: 'Card not active'};
    }*/
    const rechargeObj = {cardId: id, amount};
    await insert(rechargeObj);
    return;  
}
