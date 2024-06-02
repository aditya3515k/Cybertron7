// scripts.js
const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', sendMessage);

function sendMessage() {
    const message = messageInput.value;
    if (message.trim() !== '') {
       
        displayMessage('Anonymous: ' + message);
       
        messageInput.value = '';
    }
}

function displayMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
