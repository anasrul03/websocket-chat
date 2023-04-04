"use strict";

const host = location.origin.replace(/^http/, "ws");
const ws = new WebSocket(host);

// WebSocket emit message
ws.onmessage = (message) => printMessage(message.data);

// Select our form that will contain the messages
const chatForm = document.querySelector(".chat-form");
// Select the chat messages area, for auto scrolling
const phoneCase = document.querySelector(".phone-case");

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = document.getElementById("message");
  // Send input to server
  ws.send(input.value);
  // Clean up input field
  input.value = "";
});

// Mimic a phone message autoscrolling
const scrollDown = (element, parent) => {
  const topPos = element.offsetTop;
  parent.scrollTop = topPos;
};

// Why? Create elements easier
const newElement = (element) => document.createElement(element);

// Why? Log messages
const timeStamp = () => new Date().toLocaleTimeString("en-GB");

// Why? Output messages
const printMessage = (message) => {
  const time = timeStamp();
  const li = newElement("li");
  const p = newElement("p");

  if (message.startsWith("iFriend") || message.includes("disconnected")) {
    li.classList = "chat__box chat__box--cpu";
    p.classList = "chat__text chat__text--cpu";
  } else {
    li.classList = "chat__box chat__box--user";
    p.classList = "chat__text chat__text--user";
  }

  li.innerHTML = `<header>${time}</header>`;
  p.innerText = `${message}`;

  document.querySelector("ul.messages").appendChild(li).appendChild(p);
  scrollDown(li, phoneCase);
};

//bega's instruction

const socket = new WebSocket("ws://localhost:8080");
const chatWindow = document.getElementById("chat-window");

socket.addEventListener("open", () => {
  socket.send("New user joined the chat");
});

socket.addEventListener("message", (event) => {
  const message = event.data;
  const messageElement = document.createElement("div");
  message.text().then((data) => {
    messageElement.innerText = data;
    chatWindow.appendChild();
  });
});

socket.addEventListener("close", () => {
  // update UI to indicate user has left the chat
  const messageElement = document.createElement("div");
  messageElement.innerText = "User has left the chat";
  socket.send("User has left the chat");
  chatWindow.appendChild(messageElement);
});

const messageForm = document.getElementById("message-form");
const messageInput = document.getElementById("message-input");

messageForm.addEventListener("submit", (event) => {
  event.preventDefault(); //changes
  const message = messageInput.value;
  socket.send(message);
  messageInput.value = "";
});
