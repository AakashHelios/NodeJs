const { log } = require("console");
const fs = require("fs");

/**Create new file */
// fs.writeFile('AsyncFile.txt',"this is created using async method",(event)=>{
// console.log(event);

// })
/**Update existing file */
// fs.appendFile('AsyncFile.txt'," UPDATED!!!- hello",(evnt)=>{
//     console.log('Task Completed');
// })

/* Read file */
// fs.readFile('AsyncFile.txt',(err,data)=>{
//     if(data!=null){
//         console.log(data);
//         let Stringdata= data.toString();
//         console.log(Stringdata)
//     }else{

//       console.log(err);
//     }
// })

// Synchronous
// const data=fs.readFileSync('AsyncFile.txt','utf-8');
// console.log(data);
// console.log('after the data');
/** Console.log 1= this is created using async method UPDATED!!!- hello
        console.log 2= after the data

        As you can see in Synchronous process it work line by line
*/
//Asynchronous
// fs.readFile('AsyncFile.txt',(error,data)=>{
//     console.log(data.toString());
// })
// console.log('after the data');

/**
console.log 2= after the data
console.log 1= this is created using async method UPDATED!!!- hello

as you can see Asynchronous  process does not wait for the response of first call so it print "after the data" before printing 
So here In asynchronous also it works line by line but not exactly line by line because of the Event Loop
Event loop will execute all the synchronous code first and then come to the Async code so that's why we are getting this output
 */

/*******************************/
// fs.mkdir('Async',(error)=>{
    // console.log(error);
    // })

    /* Write to a File            */
    // fs.writeFile("./Async/WriteToMe.txt", 'Hello World',(error)=>{
    //     console.log(error);
    // })
    // /* Append To A File           */
    // fs.appendFile("./Async/WriteToMe.txt","\nI am appending some text.", (error) => {
    //   if (error) throw error;
    //   console.log("The text was appended.");    });
    /* Reading data without the buffer*/
    // fs.readFile("./Async/WriteToMe.txt", "utf8",(err,data)=> {
    //     if(data){

    //         console.log(data);
    //     }else{
    //         console.log(err);
    //     }
    // })  


    /*Rename file*/
    // fs.rename("./Async/WriteToMe.txt","./Async/NewName.txt",(err)=>{
    //     console.log(err);})

    