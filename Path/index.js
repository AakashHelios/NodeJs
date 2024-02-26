const path = require('path'); 
/*The path.dirname() method returns the directory name of a path, similar to the Unix dirname command. Trailing directory separators are ignored*/
// let pathdirname= path.dirname('C:/Users/Dell/OneDrive/Desktop/mukhar sir/nodejs/Path/index.js')
// console.log(pathdirname);

/*The path.extname() method returns the extension of the path*/
// let pathextname= path.extname('C:/Users/Dell/OneDrive/Desktop/mukhar sir/nodejs/Path/index.js')
// console.log(pathextname);

/*The path.basename() method returns the last portion of a path, similar to the Unix basename command. Trailing directory separators are ignored.*/
// let pathFilename= path.basename('C:/Users/Dell/OneDrive/Desktop/mukhar sir/nodejs/Path/index.js')
// console.log(pathFilename);

let pathname=path.parse("C:/Users/Dell/OneDrive/Desktop/mukhar sir/nodejs/Path/index.js");
console.log(pathname.name);
console.log(pathname.root);

const fs= require("fs");
fs.create