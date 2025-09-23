// Import asynchronous file system functions
const { writeFile, readFile } = require('fs');

console.log('start'); // Program start – yeh line turant print hogi

// Asynchronously read the first file
readFile('./content/First.txt', 'utf8', (err, first) => {
    if (err) return console.log(err); // Agar error ho toh print karo aur callback exit

    // Asynchronously read the second file inside first file's callback
    readFile('./content/second.txt', 'utf8', (err, second) => {
        if (err) return console.log(err); // Error handling

        // Asynchronously write both contents into a new file
        writeFile(
            './content/result-sync.txt', // File path
            `Here is the result: ${first}, ${second}`, // Content to write
            (err) => {
                if (err) return console.log(err); // Error handling
                console.log('File written successfully!'); // Success message
            }
        );
    });
});

console.log('end'); // Program continues immediately (non-blocking)
// Output order will be: start → end → File written successfully!
