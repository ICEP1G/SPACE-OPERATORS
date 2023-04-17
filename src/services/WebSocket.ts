
import { data_players } from "../models/types/data_players";
import { data_connect } from "../models/types/data_connect";
import { data_destroyed } from "../models/types/data_destroyed";
import { data_start } from "../models/types/data_start"
import { data_operation } from "../models/types/data_operation";
import { data_integrity } from "../models/types/data_integrity";
import { data_finish } from "../models/types/data_finish";

export const API_URL: string = "https://space-operators.herokuapp.com/"
export const socket: WebSocket = new WebSocket("ws://space-operators.herokuapp.com/");

// Basic functions
socket.onopen = () => {
    console.log('connection established with the websocket');
}

socket.onmessage = (event) => {
    if (event.data != "ping") {
        console.log('entering message:', event);
    }
}

socket.onerror = (error) => {
    console.error('error:', error);
}

socket.onclose = (event) => {
    console.log('websocket connection closed', event.code, event.reason);
}

//--------------------------------------------------------------------------------//


// Generic data response from the WebSocket
export interface ws_GenericResponse {
    type: string,
    data: any
}
export const ws_GenericResponse = (
    type: string,
    data: any
): ws_GenericResponse => ({
    type,
    data
});









// // Allow to get automatically the right data when the WebSocket is returning a message
// export interface websocket_request {
//     type: string,
//     data?: data_connect | data_players | data_start | data_operation | data_finish | data_integrity | data_destroyed | any
// }

// export const websocket_request = (
//     type: string,
//     data?: data_connect | data_players | data_start | data_operation | data_finish | data_integrity | data_destroyed | any
// ): websocket_request => ({
//     type,
//     data
// });

// // Convert the socket response into an object based on the correct model
// export const socketResponse = (data: string): websocket_request => {
//     if (data != "ping") {
//         const response: websocket_request = JSON.parse(data);
//         const type: string = response.type;

//         switch (type) {
//             case "players":
//                 const dataPlayers: data_players = response.data
//                 const resultPlayers: websocket_request = {
//                     type: type,
//                     data: dataPlayers
//                 }
//                 return resultPlayers;
//             case "operation":
//                 const dataOperation: data_operation = response.data
//                 const resultOperation: websocket_request = {
//                     type: type,
//                     data: dataOperation
//                 }
//                 return resultOperation;
//             case "finish":
//                 const dataFinish: data_finish = response.data
//                 const resultFinish: websocket_request = {
//                     type: type,
//                     data: dataFinish
//                 }
//                 return resultFinish;
//             case "intergrity":
//                 const dataIntegrity: data_integrity = response.data
//                 const resultIntegrity: websocket_request = {
//                     type: type,
//                     data: dataIntegrity
//                 }
//                 return resultIntegrity;
//             case "destroyed":
//                 const dataDestroyed: data_destroyed = response.data
//                 const resultDestroyed: websocket_request = {
//                     type: type,
//                     data: dataDestroyed
//                 }
//                 return resultDestroyed;
//             default:
//                 const resultDefault: websocket_request = {
//                     type: "Data unknown",
//                     data: "No data or data unknown"
//                 }
//                 return resultDefault;
//         } 
//     }
//     const resultPing: websocket_request = {
//         type: "ping"
//     }
//     return resultPing
// }









// export interface websocket_generic_request {
//     type: string,
//     data: string
// }
// export const websocket_generic_request = (
//     type: string,
//     data: string
// ): websocket_generic_request => ({
//     type,
//     data
// })
// // Allow to get only the data from the websocket
// export const websocketGenericRequest = (data: string): websocket_generic_request => {
//     if (data != "ping") {
//         const response: websocket_generic_request = JSON.parse(data);
//         return response;
//     }
//     else {
//         const resultPing: websocket_generic_request = {
//             type: "ping",
//             data: "ping"
//         }
//         return resultPing
//     }
// }


// // Allow to get automatically the right data when the WebSocket is returning a message
// export interface websocket_request {
//     type: string,
//     data?: data_connect | data_players | data_start | data_operation | data_finish | data_integrity | data_destroyed
// }

// export const websocket_request = (
//     type: string,
//     data?: data_connect | data_players | data_start | data_operation | data_finish | data_integrity | data_destroyed
// ): websocket_request => ({
//     type,
//     data
// });

// // Convert the socket response into an object based on the correct model
// export const socketResponse = (data: string): websocket_request => {
//     if (data != "ping") {
//         const response: websocket_generic_request = websocketGenericRequest(data)
//         const responseData = JSON.stringify(response.data);
//         const type: string = response.type;

//         switch (type) {
//             case "players":
//                 const dataPlayers: data_players = JSON.parse(responseData)
//                 if (dataPlayers.players.length == 0) {
//                     const resultPlayers: websocket_request = {
//                         type: type,
//                         data: dataPlayers
//                     }
//                     return resultPlayers;
//                 }
//                 else {
//                     const resultPlayers: websocket_request = {
//                         type: type,
//                         data: dataPlayers
//                     }
//                     return resultPlayers;
//                 }
//             case "operation":
//                 const dataOperation: data_operation = JSON.parse(responseData)
//                 const resultOperation: websocket_request = {
//                     type: type,
//                     data: dataOperation
//                 }
//                 return resultOperation;
//             case "finish":
//                 const dataFinish: data_finish = JSON.parse(responseData)
//                 const resultFinish: websocket_request = {
//                     type: type,
//                     data: dataFinish
//                 }
//                 return resultFinish;
//             case "intergrity":
//                 const dataIntegrity: data_integrity = JSON.parse(responseData)
//                 const resultIntegrity: websocket_request = {
//                     type: type,
//                     data: dataIntegrity
//                 }
//                 return resultIntegrity;
//             case "destroyed":
//                 const dataDestroyed: data_destroyed = JSON.parse(responseData)
//                 const resultDestroyed: websocket_request = {
//                     type: type,
//                     data: dataDestroyed
//                 }
//                 return resultDestroyed;
//             default:
//                 const dataFinishDefault: data_finish = JSON.parse(responseData)
//                 const resultFinishDefault: websocket_request = {
//                     type: type,
//                     data: dataFinishDefault
//                 }
//                 return resultFinishDefault;
//         } 
//     }
//     else {
//         const resultPing: websocket_request = {
//             type: "ping"
//         }
//         return resultPing
//     }
// }







