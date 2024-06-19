import { event } from '../constants/constants';
import { premiseController } from '../controller/premises-controller';
const handler = async (event) => {
    const accNumber = event.queryParameter.accountNumber;
    const response = await premiseController(accNumber);
};
handler(event);
