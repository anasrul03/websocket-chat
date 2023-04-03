const ws = new WebSocket("ws://localhost:8080");

// const printMsg = () =

ws.addEventListener("open", () => {
  ws.send("New user joined the chat");
});

ws.addEventListener("message", (event) => {
  const message = event.data;
  // const divElement = document.createElement("<li>");
  // const getSpace = document.getElementById("chat-window");
  // document.getElementById("chat-window").innerHTML = divElement;
  // divElement.innerText = message;
  // console.log(message);
});

ws.addEventListener("close", () => {
  // update UI to indicate user has left the chat
});

const messageForm = document.getElementById("message-form");
const messageInput = document.getElementById("message-input");

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const chatWindow = document.getElementById("chat-window");
  const message = messageInput.value;
  ws.send(message);
  messageInput.value = "";
  console.log(message);
  chatWindow.innerHTML = `<p>${message}</p>`;
});
