const http = require('http');

const  fs=require('fs');
const port = 3000;

const server=http.createServer((req,res)=>{

console.log(req);

html=fs.readFileSync("./index.html")

res.end(html);
})
server.listen(port,()=>{console.log(`http://localhost:${port}`)})
