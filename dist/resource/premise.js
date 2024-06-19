"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants/constants");
const premises_controller_1 = require("../controller/premises-controller");
const handler = async (event) => {
    const accNumber = event.queryParameter.accountNumber;
    const response = await (0, premises_controller_1.premiseController)(accNumber);
};
handler(constants_1.event);
//# sourceMappingURL=premise.js.map