
const express = require('express');
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Defining the POST endpoint at /sorted
app.post('/sorted', (req, res) => {
    // Extracting the 'data' field from the request body
    const { data } = req.body;

    // Checking if 'data' is string
    if (typeof data !== 'string') {
        // If not, return a 400 error with an error message
        return res.status(400).json({ error: 'Invalid input.' });
    }

    // Converting the string to an array of characters, sorting them, and joining them back into a string
    const sortedWord = data.split('').sort().join('');

    // Return the sorted characters as a JSON response
    res.json({ word: sortedWord });
});

// Start the server 
app.listen(4000, () => {
    console.log('Server running on http://localhost:4000');
});
