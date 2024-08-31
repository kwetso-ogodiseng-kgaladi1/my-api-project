const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Step 3: Create a POST endpoint
app.post('/sort-word', (req, res) => {
    // Step 4: Receive JSON data with the "data" field
    const inputString = req.body.data;

    // Step 5: Convert the string into an array of characters
    const charArray = inputString.split('');

    // Step 6: Sort the array alphabetically
    const sortedArray = charArray.sort();

    // Step 7: Return the sorted array in JSON format
    res.json({ word: sortedArray });
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
