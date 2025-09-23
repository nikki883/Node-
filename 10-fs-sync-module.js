// Import only the required functions from 'fs' module
const { writeFileSync, readFileSync } = require('fs');


console.log('start');

// Read content of first file (synchronously/blocking)
const first = readFileSync('./content/First.txt', 'utf8');

// Read content of second file (synchronously/blocking)
const second = readFileSync('./content/second.txt', 'utf8');

// Print the content of both files to console
console.log(first, second);

// Write a new file or append to existing file (synchronously)
// 'flag: a' means append the content if file already exists
writeFileSync(
  './content/result-sync.txt',
  `Here is the result: ${first}, ${second}`,
  { flag: 'a' }
);

// Read the newly created/updated file to verify content
const third = readFileSync('./content/result-sync.txt', 'utf8');

// Print the content of result file
// console.log(third);

console.log('done with this task');
console.log('starting with next one...')
