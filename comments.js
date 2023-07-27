//Create web server with express
const express = require('express');
const app = express();
const port = 3000;

//Create a route for comments
app.get('/comments', (req, res) => {
    res.send('Welcome to comments');
});

//Create a route for comments
app.get('/comments/:id', (req, res) => {
    res.send('Welcome to comments');
});

//Create a route for comments
app.post('/comments', (req, res) => {
    res.send('Welcome to comments');
});

//Create a route for comments
app.put('/comments/:id', (req, res) => {
    res.send('Welcome to comments');
});

//Create a route for comments
app.delete('/comments/:id', (req, res) => {
    res.send('Welcome to comments');
});

//Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


