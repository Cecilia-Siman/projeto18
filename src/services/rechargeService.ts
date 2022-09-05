import { insert } from "../repositories/rechargeRepository";
import { findById } from "../repositories/cardRepository";

export async function recharge(id: number, amount: number){
    try {
        console.log(id);
        const rechargeObj = {cardId: id, amount};
        await insert(rechargeObj);
        return;
    }

    catch(error){
        return error;
    }    
}


async function testActive(id: number){
    const card = await findById(id);
    if (card.password){
        console.log('está ativo');
        return true;
    }
    else{
        console.log('não está ativo');
        return false;
    }

}