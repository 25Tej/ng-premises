"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidRequest = void 0;
function isValidRequest(accountNumber) {
    if (!accountNumber || accountNumber.length !== 12) {
        throw new Error("Invalid Request");
    }
    return accountNumber;
}
exports.isValidRequest = isValidRequest;
//# sourceMappingURL=request-validator.js.map