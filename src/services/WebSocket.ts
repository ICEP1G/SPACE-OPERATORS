

export const API_URL: string = "https://space-operators.herokuapp.com/"
export let socket: WebSocket = new WebSocket("ws://space-operators.herokuapp.com/");

export const createNewSocket = () => {
    socket = new WebSocket("ws://space-operators.herokuapp.com/");
}

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




