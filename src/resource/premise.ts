import { event } from '../constants/constants';
import { premiseController } from '../controller/premises-controller';

export const handler = async (event,context,callback) => {
    const accNumber = event.queryParameter.accountNumber;
    const response = await premiseController(accNumber);
    callback(null,response);
};

