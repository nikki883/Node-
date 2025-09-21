const os = require('os');

// Info about the current user
const user = os.userInfo();
console.log(user);

/*
Sample Output:
[Object: null prototype] {
  uid: -1,
  gid: -1,
  username: 'nikki',
  homedir: 'C:\\Users\\nikki',
  shell: null
}
*/

// Explanation:
// - On Windows, os.userInfo() in Node always returns uid: -1 and gid: -1,
//   regardless of the user.
// - This happens because Windows doesn’t use UNIX-style numeric user/group IDs.
// - On Linux/macOS, you’ll see actual numeric values for uid and gid (e.g., 1000, 501).

// Method that returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

// Info about the current OS
const currentOS = {
  name: os.type(),        // e.g., Windows_NT, Linux, Darwin
  release: os.release(),  // OS version
  totalMem: os.totalmem(),// Total memory in bytes
  freeMem: os.freemem(),  // Free memory in bytes
};

console.log(currentOS);
