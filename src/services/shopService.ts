import { findById } from "../repositories/cardRepository";
import { findBusinessById } from "../repositories/businessRepository";
import { isValid, isActive } from "./validCardService";
import { insert } from "../repositories/paymentRepository";
import { balanceCalculus } from "./balanceService";

export async function purchasePOS(cardId: number, password: string, shopId: number, amount: number){
    try{
    const valid = await isValid(cardId);
    if (!valid){
        throw {code: 'card not valid'};
    }
    const active = await isActive(cardId);
    if(!active){
        throw {code: 'card not active'};
    }
    const cardData = await findById(cardId);
    const businessData = await findBusinessById(shopId);
    if(password !== cardData.password){
        throw('Password not valid');
    }
    if (cardData.type !== businessData.type){
        throw {code: 'Card type does not correspond'}
    }
    let { balance } = await balanceCalculus(cardId);
    if (amount > balance){
        throw {code: 'balance insuficient'};
    }
    const paymentData = { cardId, businessId: shopId, amount};
    await insert(paymentData);
    return;
    }
    catch(error){
        return error;
    }
    

}