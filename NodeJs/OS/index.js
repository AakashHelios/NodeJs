const os= require('os');

/*Returns the operating system CPU architecture*/
// let data= os.arch();
// console.log(data);
console.log(os.hostname());

/*Returns the amount of free system memory in bytes as an integer.*/
let data = os.freemem();
console.log('free memory',`${data/1024/1024/1024}`);

let totalmem=  os.totalmem();
console.log('total memory',`${totalmem/1024/1024/1024}`);

