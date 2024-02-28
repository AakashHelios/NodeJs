const EventEmitter= require('events');
const event= new  EventEmitter();
// event.on("sayMyName",()=>{
//     console.log('Aakash');
// });
// event.on("sayMyName",()=>{
//     console.log('helios Web Service');
// });
// event.on("sayMyName",()=>{
//     console.log('Jaipur');
// });
// event.emit("sayMyName");


event.on('Checkpage',(sc,msg)=>{
    console.log(`this is ${sc} page and ${msg}`);
});

event.emit('Checkpage',200, 'OK');
