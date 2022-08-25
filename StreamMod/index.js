const fs = require("fs");
const http = require("http");

// console.log("hello from another side");

const server = http.createServer();

server.on("request" ,(req,res) => {

    // fs.readFile("input.txt", (err, data) => {

    //     if(err) return console.log("err found");
        
    //     res.end(data.toString());

    // });

    /*          r eading from stream  and hndle streaming events           */
    // const rstream = fs.createReadStream("input.txt");

    // rstream.on("data", (chunkdata) => {
    //         res.write(chunkdata);
    // })
    // rstream.on("end", () => {
    //     res.end("file  not find");
    // });


    /* 3rd way with the help of Stream.pip  */ 

    const rstream = fs.createReadStream("input.txt");
    rstream.pipe(res);
    


});

server.listen(2000, "127.0.0.1");