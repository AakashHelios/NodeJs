const { log } = require("console");
const { json } = require("stream/consumers");
const fs = require("fs");


const { doesNotMatch } = require("assert");

const biodata = {
  name: "Aakash",
  age: "22",
  email: "aakash@gmail.com",
};

// console.log(biodata.email);
//const jsondata= JSON.stringify(biodata);
// console.log(jsondata);

// const StringJSON=JSON.parse(jsondata);
// console.log(StringJSON);

// const jsondata = JSON.stringify(biodata);
// fs.writeFile("JSON1.json", jsondata, (err) => {
//   console.log("done");
// });
// fs.readFile("JSON1.json", "utf-8", (err, data) => {
//   const orgdata = JSON.parse(data);
//   console.log(orgdata);
//   console.log("data", data);
// });

console.log(__dirname);