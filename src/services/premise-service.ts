import { getPremise } from '../repository/premise-repository';

async function getPremiseDetails(accountNumber: string): Promise<any> {

   const premiseData = await getPremise(accountNumber);
   return premiseData;

}

export { getPremiseDetails };


