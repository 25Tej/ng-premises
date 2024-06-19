"use strict";
// export const dataArray = [
//     {
//         accountNumber: "909768523005",
//         premises: [
//             {
//                 premiseId: "00224801EEEB5C",
//                 premise: "49 Featherstone Street, EC1Y 8SY"
//             },
//             {
//                 premiseId: "00225601ERTB5C",
//                 premise: "123 Maple Street, AB12 3ST"
//             }
//         ]
//     },
//     {
//         accountNumber: "123456789012",
//         premises: [
//             {
//                 premiseId: "00234501XYZB5C",
//                 premise: "567 Oak Avenue, XY34 5AB"
//             },
//             {
//                 premiseId: "00237801LMNB5C",
//                 premise: "789 Elm Street, LM67 8CD"
//             }
//         ]
//     },
//     {
//         accountNumber: "987654321098",
//         premises: [
//             {
//                 premiseId: "00239001PQRS5C",
//                 premise: "987 Birch Lane, PQ89 0EF"
//             },
//             {
//                 premiseId: "00241201UVWX5C",
//                 premise: "654 Cedar Road, UV12 3GH"
//             }
//         ]
//     },
// ];
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataArray = void 0;
// export interface dataArray {
//     accountNumber: string;
//     premises: Premise[];
// }
// interface Premise {
//     premiseId: string;
//     premise: string;
// }
exports.dataArray = [
    {
        accountNumber: "909768523005",
        premises: [
            {
                premiseId: "00224801EEEB5C",
                premise: "49 Featherstone Street, EC1Y 8SY"
            },
            {
                premiseId: "00225601ERTB5C",
                premise: "123 Maple Street, AB12 3ST"
            }
        ]
    },
    {
        accountNumber: "123456789012",
        premises: [
            {
                premiseId: "00234501XYZB5C",
                premise: "567 Oak Avenue, XY34 5AB"
            },
            {
                premiseId: "00237801LMNB5C",
                premise: "789 Elm Street, LM67 8CD"
            }
        ]
    },
    {
        accountNumber: "987654321098",
        premises: [
            {
                premiseId: "00239001PQRS5C",
                premise: "987 Birch Lane, PQ89 0EF"
            },
            {
                premiseId: "00241201UVWX5C",
                premise: "654 Cedar Road, UV12 3GH"
            }
        ]
    },
];
// export function getMockRewardDetailsById(accountNumber: any) {
//     try {
//       for (const premises of dataArray) {
//         if (premises.accountNumber === accountNumber) {
//           return {
//             $metadata: { httpStatusCode: 200 },
//             Item: premises,
//           };
//         }
//       }
//       return {
//         $metadata: { httpStatusCode: 404 },
//       };
//     } catch (error) {
//       return {
//         $metadata: { httpStatusCode: 500 },
//       };
//     }
//   }
//# sourceMappingURL=mock.js.map