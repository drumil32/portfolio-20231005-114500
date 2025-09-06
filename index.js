// Add JavaScript functionality here

// Example: Add a simple form submission alert
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    alert('Thank you for your message!');
});