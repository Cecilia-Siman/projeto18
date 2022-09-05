import { findById } from "../repositories/cardRepository";
import { findBusinessById } from "../repositories/businessRepository";
import { isValid, isActive } from "./validCardService";
import { insert } from "../repositories/paymentRepository";
import { balanceCalculus } from "./balanceService";

export async function purchasePOS(cardId: number, password: string, shopId: number, amount: number){
    const valid = await isValid(cardId);
    if (!valid){
        throw {code:'Not Valid', message:'Card not valid'};
    }
    const active = await isActive(cardId);
    if(!active){
        throw {code:'Not Valid', message: 'Card not active'};
    }
    const cardData = await findById(cardId);
    const businessData = await findBusinessById(shopId);
    if(password !== cardData.password){
        throw {code:'Unauthorized', message:'Password not valid'};
    }
    if (cardData.type !== businessData.type){
        throw {code:'Unauthorized', message:'Card type does not correspond to business type'}
    }
    let { balance } = await balanceCalculus(cardId);
    if (amount > balance){
        throw {code:'Unauthorized', message:'Balance insuficient'};
    }
    const paymentData = { cardId, businessId: shopId, amount};
    await insert(paymentData);
   

}