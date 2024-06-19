"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPremise = void 0;
const mock_1 = require("../constants/mock");
function getPremise(accountNumber) {
    const premises = mock_1.dataArray;
    for (const data of mock_1.dataArray) {
        if (data.accountNumber === accountNumber) {
            return data;
        }
    }
    throw new Error("premise not found");
}
exports.getPremise = getPremise;
//# sourceMappingURL=premise-repository.js.map