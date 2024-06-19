"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const premises_controller_1 = require("../controller/premises-controller");
const handler = async (event, context, callback) => {
    const accNumber = event.queryParameter.accountNumber;
    const response = await (0, premises_controller_1.premiseController)(accNumber);
    callback(null, response);
};
exports.handler = handler;
//# sourceMappingURL=premise.js.map