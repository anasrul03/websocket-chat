const socket = new WebSocket("ws://localhost:8080");
// let userMsg = [];

// const printMsg = () =

socket.addEventListener("open", () => {
  socket.send("New user joined the chat");
  console.log("entry here");
});

socket.addEventListener("message", (event) => {
  const message = event.data;
  // socket.send();
});

socket.addEventListener("close", () => {
  // update UI to indicate user has left the chat
});

const messageForm = document.getElementById("message-form");
const messageInput = document.getElementById("message-input");

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!socket) {
    console.log("no socket");
  }
  const chatDisplay = document.getElementById("chat-window");
  const userInput = messageInput.value;
  const listElement = document.createElement("li");
  // var valueElement = document.createElement("span");
  // const time = Date.now();
  // const changeTime = time.toLocaleDateString();
  // const str = new Date();
  // const datetime = str.today() + str.timeNow();
  // const [dateComponents, timeComponents] = datetime.split(" ");
  // const [month, day, year] = dateComponents.split("/");
  // const [hours, minutes, seconds] = timeComponents.split(":");
  // const date = new Date(+year, month - 1, +day, +hours, +minutes, +seconds);

  listElement.innerText = `${userInput} []`;

  chatDisplay.appendChild(listElement);

  // console.log(date);

  // divElemnt.appendChild(valueElement);
  // valueElement.innerText = "message";
  // chatWindow.innerHTML = `<p>${message}</p>`;
  // divElement.innerHTML = `<p>${message}</p>`;
  // userMsg.push(message);

  socket.send(messageInput.value);
  // console.log(messageInput.value);

  console.log(userInput);

  messageInput.value = "";
});
