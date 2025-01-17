const fs = require("fs");
// var wf = fs.open("textfile", "a", (err)=>{
//     if(err) console.log(err.message);
//     return;
// });
// //  we use most of the time a+

// console.log("File created");

// var wf = fs.writeFile("text", "shivam", (err)=>{
//     if(err) console.log(err.message);
//     return;
// });

// console.log("File created");
var rf = fs.readFile("text", "utf-8", (err, data)=>{
    if(err){ 
    console.log(err.message);
    return;
    }
    console.log(data);
});