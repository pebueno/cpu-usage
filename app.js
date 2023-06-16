const process = require('process');

var usage = process.cpuUsage()

// CPU Usage value
console.log(usage);

// Printing the current time stamp
const now = Date.now();

// Looping to delay the process for 100 milliseconds
while (Date.now() - now < 100);

usage = process.cpuUsage(usage)

// CPU Usage by this process
console.log(usage);
