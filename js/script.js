document.addEventListener('DOMContentLoaded', () => {
    const guestNames = ['Alison Reifenberg', 'Ben Reifenberg', 'Jean Reifenberg', 'Anne Rack', 'Tim Rack', 'Mary Gearing', 'Adam Gearing', 'Jake Tobol']; // Add your guest names here
    const shuffledGuests = shuffleArray(guestNames);
    const listContainer = document.getElementById('guest-list');
    
    shuffledGuests.forEach(name => {
        const listItem = document.createElement('li');
        listItem.textContent = name;
        listContainer.appendChild(listItem);
    });
});

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

