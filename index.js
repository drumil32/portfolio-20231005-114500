// Form submission functionality
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    alert('Thank you for your message!'); // Display a thank you message
    this.reset(); // Reset the form fields
});