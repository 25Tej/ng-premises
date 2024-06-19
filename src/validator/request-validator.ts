function isValidRequest(accountNumber) {
    if (!accountNumber || accountNumber.length !== 12) {
        throw new Error("Invalid Request");
    }
    return accountNumber;
}
export { isValidRequest };
