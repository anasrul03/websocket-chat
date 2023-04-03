# WebSocket Chat App
This is a simple chat application that uses WebSocket to enable real-time communication between multiple users.

## Usage
To use this application, simply connect to the WebSocket server using the following code:

`chat.js`

    
    
    const socket = new WebSocket('ws://localhost:8080');

    socket.addEventListener('open', () => {
        socket.send('New user joined the chat');
    });

    socket.addEventListener('message', (event) => {
        const message = event.data;
        // update chat UI with new message
    });

    socket.addEventListener('close', () => {
        // update UI to indicate user has left the chat
    });

    const messageInput = document.querySelector('#message-input');

    messageInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const message = messageInput.value;
            socket.send(message);
            messageInput.value = '';
        }
    });


This code creates a new WebSocket instance and connects it to the server at ws://localhost:8080. Once connected, it sends a message to the server indicating that a new user has joined the chat. It also listens for incoming messages and updates the chat UI accordingly. When the WebSocket connection is closed, it updates the UI to indicate that the user has left the chat.

To send a message, the user types the message into the input field with the ID message-input and presses the Enter key. The message is then sent to the server using the socket.send() method.

# Installation

To use this server, you must have Node.js and the ws library installed. To install ws, run the following command in your terminal:
    

`npm install ws`


## Usage
To start the server, simply run the following command in your terminal:

`node index.js`


Once the server is running, clients can connect to it using a WebSocket client library, such as ws in JavaScript.

## How it works
The server listens for connections on port `8080`, and when a client connects, it logs a message to the console. When a client sends a message to the server, the server logs the message to the console and then broadcasts it to all connected clients.

When a client disconnects from the server, the server logs a message to the console.

License
This code is released under the MIT License. See LICENSE for more information.
# websocket-chat
