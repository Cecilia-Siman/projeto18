import { cardData } from "./createCardService";
import { isValid, isActive } from "./validCardService";
import { findById, update } from "../repositories/cardRepository";

export async function activatingCard(id: number, password: any, cvc: string){
    const valid = await isValid(id);
    if (!valid){
        throw {code:'Not Valid', message:'Card not valid'};
    }
    const active = await isActive(id);
    if(!active){
        throw {code:'Not Valid', message: 'Card not active'};
    }
    const cardData = await findById(id);
    if (cardData.securityCode !== cvc){
        throw {code:'Unauthorized', message:'Security code not valid'}
    }
    if (password.length !== 4 || isNaN(password)){
        throw {code:'Unauthorized', message:'Password not valid'};
    }
    const updateData = {
        password,
        isBlocked: false
    }
    await update(id, updateData);
    return;

}

export async function changingCardStatus(id: number, password: string, newStatus:boolean){
    const valid = await isValid(id);
    if (!valid){
        throw {code:'Not Valid', message:'Card not valid'};
    }
    const active = await isActive(id);
    if(!active){
        throw {code:'Not Valid', message: 'Card not active'};
    }
    const cardData = await findById(id);
    if(cardData.isBlocked === newStatus){
        if (newStatus === true){
            throw {code:'Bad request', message:'Card\'s already blocked'};
        }
        else{
            throw {code:'Bad request', message:'Card\'s already unlocked'};
        }
        
    }

    if (cardData.password !== password){
        
        throw {code:'Unauthorized', message:'Password not valid'};
    }
    const updateData = {
        isBlocked: newStatus
    }
    await update(id, updateData);
    return;
}