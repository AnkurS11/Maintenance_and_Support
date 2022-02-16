var http=require('http')
const fs=require('fs')
const path=require('path')
const hostname="127.0.0.1";
const port=6000;

var obj = {"Priority":3, "Assigned_to":"Pradeep","Date":"2022-01-15", "Time":"12:32:25", "Status":"In progress"}

const server=http.createServer(function(request,response)
{
    response.writeHead(200,{"content-type":"text/html"})
    var url=request.url;
    if(url=='/'){
        fs.readFile(path.join(__dirname,"Home.html"),"UTF-8",(err,data)=>
        {
            if(err) throw err;
            response.end(data);
        });
    }
    else if(url=='/tickets'){
        fs.readFile(path.join(__dirname,"../Single page app/SiglePage_Documents.html"),"UTF-8",(err,data)=>
        {
            if(err) throw err;
            response.end(data);
        });
    }
    else if(url=='/NewTicket'){
        fs.readFile('./data.json', (err, data) => {
            if(!err) {
                var updated = JSON.parse(data)
                updated.push(obj)
                fs.writeFile('./employee.json', JSON.stringify(updated, null, 2), (err) => {
                    if(!err) {
                        console.log("File Write Successful")
                    }
                    else {
                        console.log(err)
                    }
                    response.end(updated);
                });
            }
    });
};
});
server.listen(port,hostname,()=>
{
    console.log('Server listening on port %s', port);
});