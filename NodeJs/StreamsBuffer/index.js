const fs= require("fs");
const http=require('http');
const server =http.createServer();

server.on( 'request', (req,res)=>{
    //1 way to show data

// fs.readFile('sample.txt',(err,data)=>{
//     if(err) return  console.log(err);
//     res.end(data.toString());
// });
//2 way to show data
const Streams= fs.createReadStream( 'samples.txt' );
Streams.on('data',(chunkdata)=>{
    res.write(chunkdata);
});
Streams.on('end',()=>{
    res.end();
})
Streams.on('Error',(errmess)=> {
    console.log(errmess);
    res.end('File not found')
})

});

server.listen(8000,'127.0.0.1')