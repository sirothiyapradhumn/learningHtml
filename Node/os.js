const os = require("os");

// return the underlying architecture
let mySystemArch = os.arch();
console.log(mySystemArch);

//return information on the cpu 
let myCpuInfo = os.cpus();
console.log(myCpuInfo);

//return the host name of the OS as a string
let hostName = os.hostname();
console.log(hostName);

//return an object containing network interface that have been assigned a network address
let networkInfo = os.networkInterfaces();
console.log(networkInfo);

//Returns the operating system as a string.
console.log(os.release());

//Returns a string identifying the operating system platform. 
console.log(os.platform());

//Returns the operating system name 
console.log(os.type());

//Returns the total amount of system memory in bytes as an integer.
console.log(os.totalmem());

//Returns the system uptime in number of seconds. 
console.log(os.uptime());
let uptimeInMIn = os.uptime() / 3600;
console.log(uptimeInMIn);

//Returns information about the currently effective user.
console.log(os.userInfo());

//Returns the operating system's default directory for temporary files as a string.
console.log(os.tmpdir());