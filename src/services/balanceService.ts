import { findPaymentByCardId } from "../repositories/paymentRepository";
import { findRechargeByCardId } from "../repositories/rechargeRepository";
import { isValid, isActive } from "./validCardService";

export async function balanceCalculus(cardId:number) {
    const valid = await isValid(cardId);
    if (!valid){
        throw {code: 'card not valid'};
    }
    const active = await isActive(cardId);
    if(!active){
        throw {code: 'card not active'};
    }
    const payments = await findPaymentByCardId(cardId);
    const recharges = await findRechargeByCardId(cardId);
    const totalRecharges = amountSum(recharges);
    const totalPayments = amountSum(payments);
    const balance: number = totalRecharges-totalPayments; 
    const objReturn = {
        balance,
        transactions: payments,
        recharges
    }
    return objReturn;
}

function amountSum(array: any): number{
    let sum: number = 0;
    for (let i=0;i<array.length;i++){
        sum += Number(array[i].amount);
    }
    return sum;
}