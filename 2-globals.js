// GLOBALS - NO WINDOW
// In Node.js, there is no window object (unlike browsers).

// __dirname  - absolute path of the folder containing your file.
// __filename - absolute path including the file name.
// require    - function to use modules (CommonJS)
// module     - info about current module
// process    - info about env where the program is being executed

console.log(__dirname);  
console.log(__filename); 
console.log(module);          // shows details about the current module
// console.log(process);      // shows environment + Node.js info

console.log(process.version);  // Node.js version
console.log(process.platform); // OS platform
console.log(process.pid);      // Process ID
console.log(process.cwd());    // Current working directory
