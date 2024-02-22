//Creating a new file!!!!
const fs = require("fs");
// fs.writeFileSync('file.txt', 'Hello World!');
// fs.writeFileSync('file.txt', 'Hello World! new update');

// fs.appendFileSync('file.txt', '\nAppending to the file...');
// console.log(fs.readFileSync('file.txt')); 


const buf_data=fs.readFileSync("file.txt");
// console.log(buf_data);
//The ReadFileSync function read the file in buffer format if we need to see the string then you need to use toString();

// <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 21 20 6e 65 77 20 75 70 64 61 74 65 0a 41 70 70 65 6e 64 69 6e 67 20 74 6f 20 74 68 65 20 66 69 6c 65 
// 2e 2e 2e>

buf_string = buf_data.toString();
console.log(buf_string);