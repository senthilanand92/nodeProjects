const fs = require ('fs');
const os = require ('os');

const argv= process.argv.slice(2);
content = argv[1]



if(argv[0]==='w'){
    writeFile(content);
}
else if(argv[0]==='r'){
    readFile();
}
else if(argv[0]==='a'){
    appendFile(content);
}
else if(argv[0]==='d'){
    truncateFile();
}
function writeFile(content){
fs.writeFile("file.txt",content, function(err,data) {
    if(err) {
         console.log(err);
         return;
    }
    else
    {
        console.log("File written");
        readFile();

    }

}); 
}
function readFile(){
    fs.readFile("file.txt",(err,data) => {
        if(err){
            console.log(err);
    
        }
        if(data){
            console.log("content in file :\n"+data.toString())
        }
    });

}

function appendFile(){
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

function truncateFile(){
    fs.truncate("file.txt",(err,data)=> {
        if(err) throw err
        else{
            console.log("File Truncated");
            readFile();
        }

    });
}



