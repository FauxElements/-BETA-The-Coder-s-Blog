const express = require('express'); // Duh

const app = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
    if (req.header('X-Replit-User-Id')) { // Check to see if the user is logged in...
        res.redirect(`/home/?user=${req.header('X-Replit-User-Name')}`); // They are logged in, redirect them to the home page.
    } else {
        res.sendFile(__dirname + '/public/login.html'); // Send a login page if they are not.
    }
});

app.get('/home', function (req, res) {
    // You could do anything you want here...
    // You might want to secure it a little, so people have to be logged in to view the page.
    res.send(`<h1>Hello, ${req.query.user}</h1>`); // You could modify this to render a template, or store the user in a database...
});

app.listen(8080, function () { // Start the server
    console.log('Server up!');
});