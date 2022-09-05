import { findById } from "../repositories/cardRepository";

export async function isValid(cardId: number){
    try{
        const card = await findById(cardId);
        if (!card){
            console.log('card not registered');
            return false;
        }
        else{
            const expireDateArray = card.expirationDate.split("/");
            const date = new Date();
            const currentMonth = date.getMonth();
            let currentYear = date.getFullYear();
            currentYear = currentYear[2]+ currentYear[3];
            const expireMonth:number = Number(expireDateArray[0]);
            const expireYear: number = Number(expireDateArray[1]);
            const thisMonth:number = Number(currentMonth);  
            const thisYear: number = Number(currentYear);
            if (currentYear < expireYear){
                return true;
            }
            if (currentYear > expireYear){
                console.log('não está válido');
                return false;
            }
            if (currentYear === expireYear && currentMonth >= expireMonth){
                console.log('não está válido');
                return false;
            } else{
                return true;
            }

        }
        }
        catch(error){
            console.log(error);
        }
}

export async function isActive(id: number){
    const card = await findById(id);
    if (card.password){
        return true;
    }
    else{
        return false;
    }

}