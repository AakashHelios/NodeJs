const http = require("http");
const fs = require("fs");
const requests = require("requests");

const homeFile = fs.readFileSync("home.html", "utf-8");

const replaceval=(tempval, orgval)=>{
    let temperature=tempval.replace("{%tempval%}",orgval.main.temp);
     temperature=temperature.replace("{%tempmin%}",orgval.main.temp_min);
     temperature=temperature.replace("{%tempmax%}",orgval.main.temp_max);
     temperature=temperature.replace("{%location%}",orgval.name);
     temperature=temperature.replace("{%Country%}",orgval.sys.country);
     return temperature;
   }

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests("https://api.openweathermap.org/data/2.5/weather?q=jaipur&appid=8204363299770a949fc0861a417eead2")
      .on("data",  (chunk)=> {
        const jsondata=JSON.parse(chunk);
        const arrdata=[jsondata]
        //console.log(arrdata[0].main.temp);
        const realTimeData=arrdata.map(val=>replaceval(homeFile,val)).join(" ");
        res.write(realTimeData);

      })
      .on("end", (err)=> {
        if (err) return console.log("connection closed due to errors", err);
        res.end();
        console.log("end");
      });
  }
});

server.listen(8000,'127.0.0.1');
