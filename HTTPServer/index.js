// console.log("Hello! Meri Janeman...");
const http = require("http");
 
const server = http.createServer((req, res) =>{
     // console.log(req.url);
    if(req.url == "/")
    res.end("Hello from the home sides");
    else if(req.url == "/about")
    res.end("Hello from the aboutus sides");
    else if(req.url == "/contact")
    res.end("Hello from the contact sides");
    else{
        res.writeHead(404);
        res.end("<h1>404 error pages. Page doesn't exist</h1>");
    } 
    
});

server.listen(2000, "127.0.0.1", 
console.log("listening to the port no 2000")
);