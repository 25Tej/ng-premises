"use strict";
// import { isValidRequest } from '../validator/request-validator.js'
// import { getPremiseDetails } from '../services/premise-service.js'
// import { buildResponse } from '../builder/response-builder.js';
Object.defineProperty(exports, "__esModule", { value: true });
exports.premiseController = void 0;
// function premiseController(event) {
//     try {
//         const accountNumber = isValidRequest(event);
//         const response = getPremiseDetails(accountNumber);
//         return buildResponse(200, response);
//     } catch (error) {
//         let errorMessage = error.message;
//         if (errorMessage === 'Invalid Request') {
//             return buildResponse(400, errorMessage);
//         } else if (errorMessage === 'premise not found') {
//             return buildResponse(404, errorMessage);
//         } else {
//             return buildResponse(500, 'Something went wrong')
//         }
//     }
// }
// // export { premiseController }
// //import { isValidRequest } from '../validator/request-validator';
// import { getPremiseDetails } from '../services/premise-service';
// import {  buildResponse } from '../builder/response-builder';
// import { isValidRequest } from '../validator/request-validator';
// //const idValidator = new IdValidator();
// //const responseBuilder = new ResponseBuilder();
// export class RewardDetailsController {
//     //private rewardDetailsService: ;
//     // constructor(rewardDetailsService: RewardDetailsService) {
//     //     this.rewardDetailsService = rewardDetailsService;
//      }
//  export async function premiseControllerId(accountNumber) {
//     try {
//         const accountNumber = isValidRequest(event);
//         //console.log("accountnumber");
//         //console.log(accountNumber);
//         const response = getPremiseDetails(accountNumber);
//         return buildResponse(200, response);
//         // if (!idValidator.isValidRequest(accountNumber)) {
//         //     throw new Error("Invalid Request");
//         // }
//         // const data = await this.getPremiseDetails.getPremiseDetailsById(accountNumber); 
//         // if (!data.Item) {
//         //     throw new Error("Invalid Request");
//         // } else {
//         //     return responseBuilder.success(200, data.Item);
//         // }
//     } catch (error) {
//         let errorMessage = error.message;
//         if (errorMessage === 'Invalid Request') {
//             console.log("error");
//             //console.log(error);
//             //return responseBuilder.error(error.message, error.statusCode);
//             return buildResponse(400, errorMessage);
//         } else if (errorMessage === 'premise not found') {
//             return buildResponse(404, errorMessage);
//         } else {
//             return buildResponse(500, 'Something went wrong');
//         }
//         //return responseBuilder.error(error.message, error.statusCode);
//     }
// }
const request_validator_1 = require("../validator/request-validator");
const premise_service_1 = require("../services/premise-service");
const response_builder_1 = require("../builder/response-builder");
async function premiseController(accNumber) {
    try {
        const accountNumber = (0, request_validator_1.isValidRequest)(accNumber);
        const response = await (0, premise_service_1.getPremiseDetails)(accountNumber);
        // console.log("resp..")
        // console.log(response);
        // const build = buildResponse(200, response); 
        //console.log("buildr");
        const bulder = (0, response_builder_1.buildResponse)(200, response);
        console.log(bulder);
        return (0, response_builder_1.buildResponse)(200, response);
    }
    catch (error) {
        let errorMessage = error.message;
        if (errorMessage === 'Invalid Request') {
            const req = (0, response_builder_1.buildResponse)(400, errorMessage);
            console.log(req);
            return (0, response_builder_1.buildResponse)(400, errorMessage);
        }
        else if (errorMessage === 'premise not found') {
            const notf = (0, response_builder_1.buildResponse)(404, errorMessage);
            console.log(notf);
            return (0, response_builder_1.buildResponse)(404, errorMessage);
        }
        else {
            console.log("500error");
            const error5 = (0, response_builder_1.buildResponse)(500, 'Something went wrong');
            console.log(error5);
            return (0, response_builder_1.buildResponse)(500, 'Something went wrong');
        }
    }
}
exports.premiseController = premiseController;
//# sourceMappingURL=premises-controller.js.map