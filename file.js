http=require('http')
var fs= require('fs')
http.createServer((req,res)=>{
   fs.readFile('index.txt', (err,data)=>{
   res.writeHead(200, {'content-Type':'text/html'});
   res.write(data);
   fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
  }); 
   return res.end("heye1")
   })
  
}).listen(8080,()=>
{console.log("im 8080");})
