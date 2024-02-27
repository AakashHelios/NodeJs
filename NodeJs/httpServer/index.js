const http = require("http");
const fs=require('fs');
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Hey there!");
  } else if (req.url == "/about") {
    res.end("Hello World!");
  }
  else if (req.url == "/contact") {
    res.end("Hello  Contact Page!");
  } 
  else if (req.url == "/userapi") {
    fs.readFile(`${__dirname}/UserApi/index.json`,'utf8', (err, data)=>{
        console.log(data);
        const objdata= JSON.parse(data);
        res.end(objdata[0].name);
    })
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>404 Not Found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening");
});
