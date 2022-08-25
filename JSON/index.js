const fs = require("fs");

const bioData = {
    id:1,
    name : "Amul Sharma",
    age: 22
};

const jsonData = JSON.stringify(bioData);

fs.writeFile("bio.json", jsonData, (err)=>{
    console.log("done");
});

fs.readFile("bio.json", "utf-8", 
(err,res) => {
    const data = JSON.parse(res);
        console.log(data);
});