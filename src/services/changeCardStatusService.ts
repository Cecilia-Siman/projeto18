import { cardData } from "./createCardService";
import { isValid, isActive } from "./validCardService";
import { findById, update } from "../repositories/cardRepository";

export async function activatingCard(id: number, password: any, cvc: string){
    try {
    const valid = await isValid(id);
    if (!valid){
        throw {code: 'card not valid'};
    }
    const active = await isActive(id);
    if(active){
        throw {code: 'card already active'};
    }
    const cardData = await findById(id);
    if (cardData.securityCode !== cvc){
        throw {code: 'invalid security code'};
    }
    if (password.length !== 4 || isNaN(password)){
        console.log('password not valid');
        throw {code: 'password not valid'};
    }
    const updateData = {
        password,
        isBlocked: false
    }
    await update(id, updateData);
    return;
    }
    catch(error){
        return error;
    }

}

export async function changingCardStatus(id: number, password: string, newStatus:boolean){
    try {
    const valid = await isValid(id);
    if (!valid){
        throw {code: 'card not valid'};
    }
    const active = await isActive(id);
    if(!active){
        throw {code: 'card not active'};
    }
    const cardData = await findById(id);
    if(cardData.isBlocked === newStatus){
        throw {code: 'card\'s current state already'};
    }

    if (cardData.password !== password){
        throw {code: 'incorrect password'};
    }
    const updateData = {
        isBlocked: newStatus
    }
    await update(id, updateData);
    return;
    }
    catch(error){
        return error;
    }

}