// app.js

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission behaviour

    // Get form data
    const category = document.getElementById('category').value;
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;

    // Create an object with form data and timestamp
    const formData = {
        category,
        name,
        description,
        timestamp: new Date().toISOString()
    };

    // Get existing data from localStorage or initialize an empty array
    const existingData = JSON.parse(localStorage.getItem('formData')) || [];

    // Save the new form data to the array
    existingData.push(formData);

    // Save the updated array back to localStorage
    localStorage.setItem('formData', JSON.stringify(existingData));

    // Show alert to the user
    alert('Form submitted successfully!');

    // Clear form fields
    document.getElementById('category').value = '';
    document.getElementById('name').value = '';
    document.getElementById('description').value = '';
}

// Attach the handleFormSubmission function to the form
const form = document.getElementById('myForm');
form.addEventListener('submit', handleFormSubmission);