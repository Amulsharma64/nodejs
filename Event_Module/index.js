const EventEmitter = require("events");

const event = new EventEmitter();
        //fired only once\\
/*        
event.on("Event", () => {
    console.log("I am a Event");
});

event.emit("Event");
*/
        //register a couple of callbacks\\
/*        
event.on("ConsoleMYName", () => {
    console.log("Your Name is Amul Sharma");
});

event.on("ConsoleMYName", () => {
    console.log("Your Name is Anchal Sharma");
});

event.on("ConsoleMYName", () => {
    console.log("Your Name is Karan Sharma");
});

event.emit("ConsoleMYName");

*/

        //registering multiple parameter\\

event.on("checkPage", (sc,msg) => {
    console.log(`Status Code is  ${sc} and the page is ${msg}`);
});
        
event.emit("checkPage", 200, "ok");              
