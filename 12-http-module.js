const http = require('http');

// Create the server
const server = http.createServer((req, res) => {

    // Handle home page route
    if (req.url === '/') {
        // Set status 200 (OK) and content type as plain text
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return res.end('Welcome to our home page');
    }

    // Handle about page route
    if (req.url === '/about') {
        // Set status 200 (OK) and content type as plain text
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        return res.end('Welcome to our about page');
    }

    // If none of the routes match → send 404 (Not Found)
    res.writeHead(404, { 'Content-Type': 'text/html' }); // status code 404 with HTML response
    res.end(`
        <h1>Oops! 404 Not Found</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">Back home</a>
    `);
});

// Start the server on port 5500
server.listen(5500, () => {
    console.log('Server is running on port 5500');
});
