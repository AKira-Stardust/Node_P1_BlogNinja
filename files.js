const fs = require("fs");

//READ FILE
// fs.readFile("./docs/blog1.txt", (err, data)=>{
//     if(err){
//         console.log("Yikes! Error: "+err);
//     } else {
//         console.log(data.toString());
//     }
// });

// console.log("Last Line");

//WRITE FILE
// fs.writeFile("./docs/blog2.txt","Hello Gang!", ()=>{
//     console.log("File was Written");
// });

//DELETE FILE

if (fs.existsSync("./docs/deleteme.txt")){
    fs.unlink("./docs/deleteme.txt", err=>{
        if(err){
            console.log(err);
        } else{
            console.log("File was Deleted!");
        }
    });
}

//DIRECTORIES

// if(!fs.existsSync("./assets")){
//     fs.mkdir("./assets", err=>{
//         if(err){
//             console.log(err);
//         } else{
//             console.log("Directory Created!");
//         }
//     });
// } else{
//     fs.rmdir("./assets", err=>{
//         if(err){
//             console.log(err);
//         } else{
//             console.log("Directory Removed!");
//         }
//     });
// }

