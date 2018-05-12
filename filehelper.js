const fs = require ('fs');
const os = require ('os');

const argv= process.argv.slice(2);
content = argv[1]



let writeFile=function (content){
fs.writeFile("file.txt",content, function(err,data) {
    if(err) {
         console.log(err);
         return;
    }
    else
    {
        console.log(content);
        console.log("File written");
        readFile();

    }

}); 
}

let readFilePromise=function (){
    return new Promise( function (resolve, reject){
        fs.readFile("file.txt",(err,data) => {
            if(err){
                console.log(err);
        reject(err);
            }
            if(data){
                console.log("content in file :\n"+data.toString())
            }
            resolve(data);
        });

    });
    

}

let readFile=function (){
        fs.readFile("file.txt",(err,data) => {
            if(err){
                console.log(err);
            }
            if(data){
                console.log("content in file :\n"+data.toString())
            }

    });

}

let appendFile=function(content){
    fs.appendFile("file.txt", "\n"+content,(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        else{
            console.log("File appended");
            readFile();
        }
    });
}

let truncateFile= function (){
    fs.truncate("file.txt",(err,data)=> {
        if(err) throw err
        else{
            console.log("File Truncated");
            readFile();
        }

    });
}
module.exports={
    writeFile,
    readFile,
    appendFile,
    truncateFile,
    readFilePromise

}




