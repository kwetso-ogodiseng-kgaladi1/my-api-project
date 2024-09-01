
const express = require('express');
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Define the POST endpoint at /sort
app.post('/sort', (req, res) => {
    // Extract the 'data' field from the request body
    const { data } = req.body;

    // Check if 'data' is string
    if (typeof data !== 'string') {
        // If not, return a 400 error with an error message
        return res.status(400).json({ error: 'Invalid input.' });
    }

    // Convert the string to an array of characters, sort them, and join them back into a string
    const sortedWord = data.split('').sort().join('');

    // Return the sorted characters as a JSON response
    res.json({ word: sortedWord });
});

// Start the server 
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
