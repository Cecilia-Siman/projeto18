import { findById } from "../repositories/employeeRepository"
import { findByTypeAndEmployeeId, insert } from "../repositories/cardRepository";
import { TransactionTypes, CardInsertData } from "../repositories/cardRepository";
import { faker } from '@faker-js/faker';
//import { number, string } from "joi";

export async function cardData(employeeId: number,cardType: TransactionTypes){
    try{
        const employee = await findById(employeeId);
        if (!employee){
            throw {code: "Employee not registered"};
        }
        const cardTest = await findByTypeAndEmployeeId(cardType,employeeId);
        if(cardTest){
            throw {code: "Card already registered for employee"};
        }
        const cardNumber: string = faker.finance.account();
        const cvc: string = faker.finance.creditCardCVV();
        const date = expirationDate();
        const name = employeeName(employee.fullName);
        
        const newCardData: CardInsertData = {
            employeeId,
            number: cardNumber,
            cardholderName: name,
            securityCode: cvc,
            expirationDate: date,
            password:"",
            isVirtual: false,
            originalCardId: null,
            isBlocked: true,
            type: cardType
        };
        await insert(newCardData);
        return;

    }
    catch(error){
        console.log(error);
        return;
    }

}

function expirationDate(){
    const date = new Date();
    const month: number = date.getMonth(); 
    let year: string = String(date.getFullYear());
    year = year[2]+year[3];
    const expirationYear = Number(year)+5;
    const returnDate = month + "/" + expirationYear;
    return returnDate; 
} 

function employeeName(employeeName: string){
    const nameArray: string[] = employeeName.split(" ");
    let middlenames = "";
    for (let i=1;i< nameArray.length -1;i++){
        const midName= nameArray[i];
        if(midName.length > 2){
            middlenames += midName[0] + " ";
        }
    }
    let returnName: string = nameArray[0].toUpperCase() + " " + middlenames + nameArray[nameArray.length-1].toUpperCase();
    return returnName;


}