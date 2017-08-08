export const REQUEST_HELLO_WORLD = "REQUEST_HELLO_WORLD";
export const RECEIVE_HELLO_WORLD = "RECEIVE_HELLO_WORLD";

export const requestHelloWorld = () => ({ type: REQUEST_HELLO_WORLD });
export const receiveHelloWorld = text => ({ type: RECEIVE_HELLO_WORLD, text });
