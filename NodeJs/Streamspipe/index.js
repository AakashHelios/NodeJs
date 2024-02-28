const fs= require("fs");
const http=require('http');
const server =http.createServer();

server.on( 'request', (req,res)=>{
  
const Streams= fs.createReadStream( 'samples.txt' );
Streams.pipe()

});

server.listen(8000,'127.0.0.1')