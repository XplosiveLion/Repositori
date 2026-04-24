// Create a button element
const button = document.createElement('button');
button.textContent = 'Click me';

// Add click event listener to the button
button.addEventListener('click', () => {
  console.log('Button clicked!');
});

// Append the button to the document body
document.body.appendChild(button);