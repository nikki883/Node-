// Import the built-in 'path' module
const path = require('path');

// path.sep → returns the platform-specific path separator
// On Windows it is '\' , on Linux/macOS it is '/'
console.log(path.sep);  


// path.join() → joins all given path segments into one normalized path
// It automatically inserts the correct path separator based on OS
// Example: On Windows → \content\subFolder\text.txt
//          On Linux/macOS → /content/subFolder/text.txt
const filePath = path.join("/content", "subFolder", "text.txt");

console.log(filePath);  // Output: \content\subFolder\text.txt  (Windows)


// path.basename() → returns the last part of a path (file or folder name)
// Example: if filePath = '/content/subfolder/text.txt', basename gives 'text.txt'
const base = path.basename(filePath);
console.log(base);  // Output: text.txt


// path.resolve() → returns an absolute path by combining given path segments
// It starts from the rightmost argument and goes left until it forms a full path
// On Windows, it will use '\' ; on Linux/macOS, it will use '/'
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolute);  // Example Output: C:\Users\nikki\OneDrive\Desktop\Project\node\content\subfolder\text.txt


// You can also resolve just a folder path
const absolute1 = path.resolve(__dirname, 'content', 'subfolder');
console.log(absolute1);  // Example Output: C:\Users\nikki\OneDrive\Desktop\Project\node\content\subfolder