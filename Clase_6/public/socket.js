console.log("Connecting to script!");

const socket = io();

// DOM element references
const chatBox = document.getElementById("chat-box");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");

// Send message to the server
sendBtn.addEventListener("click", () => {
    const message = chatInput.value.trim();
    if (message) {
        socket.emit("chatMessage", message);
        chatInput.value = "";
    }
});

// Receive messages from the server
socket.on("chatMessage", (msg) => {
    const newMessage = document.createElement("p");
    newMessage.textContent = msg;
    chatBox.appendChild(newMessage);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll
});
