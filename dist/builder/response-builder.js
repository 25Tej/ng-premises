"use strict";
// function buildResponse(statusCode, response) {
//     if(statusCode === 200){
//         return {
//             statusCode,
//             body: JSON.stringify({
//                 jsonapi: {
//                     version: "1.0"
//                 },
//                 data: {
//                     type: "rewards",
//                     attributes: response
//                 }
//             })
//         }
//     }else{
//         return {
//             statusCode,
//             body: JSON.stringify({
//                 error: {
//                     message: response
//                 }
//             })
//         }
//     }
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildResponse = void 0;
// }
// export { buildResponse }
// export class ResponseBuilder {
//     success(statusCode: number, data): any {
//       return {
//         statusCode: statusCode,
//         body: {
//           jsonapi: {
//             version: "1.0",
//             data,
//           },
//         },
//       };
//     }
//     error(message: any, statusCode: number): any {
//       return {
//         statusCode: statusCode,
//         errors: {
//           jsonapi: {
//             version: "1.0",
//             message,
//           },
//         },
//       };
//     }
//   }
function buildResponse(statusCode, response) {
    if (statusCode === 200) {
        return {
            statusCode,
            body: JSON.stringify({
                jsonapi: {
                    version: "1.0"
                },
                data: {
                    type: "premises",
                    attributes: {
                        "accountNumber": response.accountNumber,
                        "premises": response.premises.map((premise) => ({
                            "premiseId": premise.premiseId,
                            "premise": premise.premise,
                        })),
                    }
                }
            })
        };
    }
    else if (statusCode == 400) {
        console.log(statusCode);
        return {
            statusCode,
            body: JSON.stringify({
                error: {
                    message: response
                }
            })
        };
    }
    else {
        {
            console.log(statusCode);
            return {
                statusCode,
                body: JSON.stringify({
                    error: {
                        message: response
                    }
                })
            };
        }
    }
}
exports.buildResponse = buildResponse;
//# sourceMappingURL=response-builder.js.map