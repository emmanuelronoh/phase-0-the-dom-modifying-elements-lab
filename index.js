// Write your code here!
// Remove <main> element with id 'main'
const mainElement = document.querySelector('main#main');
if (mainElement) {
    mainElement.remove();
}

// Create new <h1> element and assign it to newHeader variable
const newHeader = document.createElement('h1');

// Set id attribute of newHeader to 'victory'
newHeader.id = 'victory';

// Set innerHTML of newHeader to "YOUR-NAME is the champion"
const yourName = 'John Doe'; // Replace with your actual name
newHeader.innerHTML = `${yourName} is the champion`;

// Append newHeader to the document body or any desired location in the DOM
document.body.appendChild(newHeader);
