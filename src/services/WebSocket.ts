
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




