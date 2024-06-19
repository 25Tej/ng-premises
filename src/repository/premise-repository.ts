import { dataArray } from '../constants/mock';

function getPremise(accountNumber: string): typeof dataArray[number] {
    const premises = dataArray;
    for (const data of dataArray) {
        if (data.accountNumber === accountNumber) {
            return data;    
        }
    }
    throw new Error("premise not found");
}

export { getPremise };

