const http = require ('http');
const fileHelper = require ('./filehelper');
var obj = {
    id: '1',
    task: 'toWriteabook',
    description: 'A book for Node JS',
    estimatedTime: '5 months',
    status: 'Research',
  }
  //console.log(JSON.stringify(obj));
const server= http.createServer((req,res) => {
    if(req.method=== 'POST'){
        req.on('data', function (data) {
            data=JSON.parse(data);
            console.log("dataid: "+data["id"]+" Appended");
            fileHelper.appendFile("\n"+JSON.stringify(data)); 
        });
        res.end();

    }

    if(req.method=== 'PUT'){
        req.on('data', function (data) { 
            data=JSON.parse(data);
            console.log("dataid: "+data["id"]); 
            fileHelper.writeFile(JSON.stringify(data));
                });
    
                res.end();
    }
    else{
        
        let url=req.url;
        if(url.substr(1)=="add"){
            console.log(fileHelper.writeFile("fromserver"));
            res.write('{data: "addhelloword"}');
            res.end();
        }
        if(url.substr(1)=="del"){
            res.write('{data: "delhelloword"}');
            res.end();
        }
        if(url.substr(1)=="read"){
          fileHelper.readFilePromise().then(
                (success)=>{
                    res.write(success);
                    res.end();
                }
            )
        .catch( 
            (error)=>{
                res.write(error);
                res.end();
            }
            )

        }
        if(url.substr(1)=="truncate"){
            fileHelper.truncateFile();
            res.write('File Truncated');
            res.end();
        }
    }
   
});
server.listen(5200);



