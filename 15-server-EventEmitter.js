const http = require('http')

// -------------------------------------------
// Example 1: Simple way (commented out here)
// -------------------------------------------
// Using createServer with a callback directly.
// Every incoming request will trigger this callback.
// const server = http.createServer((req, res) => {
//     res.end('welcome')
// })

// -------------------------------------------
// Example 2: Using EventEmitter API
// -------------------------------------------

// Create an HTTP server object.
// At this point, the server is created but no request handler is attached.
const server = http.createServer();

// The server is an EventEmitter under the hood.
// It emits different events such as 'request', 'close', 'connect', etc.

// Here we are listening (subscribing) to the 'request' event.
// Every time a client makes a request, this callback will run.
server.on('request', (req, res) => {
    // res.end() sends the response and closes the connection.
    res.end('welcome');
});

// Make the server listen on port 5000.
// After this, you can open http://localhost:5000 in your browser to test it.
server.listen(5000);
