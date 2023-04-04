const socket = new WebSocket("ws://localhost:8080");
const chatWindow = document.getElementById("chat-window");

socket.addEventListener("open", () => {
  socket.send("New user joined the chat");
});

socket.addEventListener("message", (event) => {
  const message = event.data;
  const messageElement = document.createElement("div");
  console.log(message);
  //handle the asynchronous with promise using 'then()'
  message.text().then((data) => {
    messageElement.innerText = data;
    chatWindow.appendChild(messageElement);
  });
});

socket.addEventListener("close", () => {
  // update UI to indicate user has left the chat
  const messageElement = document.createElement("div");
  messageElement.innerText = "User has left the chat";
  chatWindow.appendChild(messageElement);
});

const messageForm = document.getElementById("message-form");
const messageInput = document.getElementById("message-input");

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = messageInput.value;
  socket.send(message);
  messageInput.value = "";
});
