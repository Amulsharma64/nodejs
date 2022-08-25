const fs = require("fs");

// fs.writeFile("read.txt", 
// "today is awesome day :)", 
// (err) =>{
//     console.log("file is created");
//     console.log(err);
// });
// fs.appendFile("read.txt", "plz help me when ever you see me in problem", 
// (err)=>{
//     console.log("Thank You in Advance");
// }
// );
fs.readFile("read.txt", "UTF-8", 
(err, res) =>{
    console.log(res);
}
);