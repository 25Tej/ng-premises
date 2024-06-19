"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPremiseDetails = void 0;
const premise_repository_1 = require("../repository/premise-repository");
async function getPremiseDetails(accountNumber) {
    const premiseData = await (0, premise_repository_1.getPremise)(accountNumber);
    return premiseData;
}
exports.getPremiseDetails = getPremiseDetails;
//# sourceMappingURL=premise-service.js.map