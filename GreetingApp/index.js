// Get elements by ID
const greetButton = document.getElementById('greetButton');
const nameInput = document.getElementById('nameInput');
const greetingMessage = document.getElementById('greetingMessage');

// Function to handle button click
function greetUser() {
    const name = nameInput.value.trim();

    if (name === '') {
        greetingMessage.textContent = 'Please enter your name!';
    } else {
        greetingMessage.textContent = `Hello, ${name} Welcome!`;
    }
}

// Add click event listener to the button
greetButton.addEventListener('click', greetUser);
