const http = require('http');
const host = 'http://localhost';
const port = 3000;
const starts = require("./pcRamUsage");

http.createServer((req, res) =>{
    let url = req.url;
    
    if(url === "/starts"){
        res.end(JSON.stringify(starts, null, 2));
    }else{
        res.end('<h1>Server create</h1>');
    }
    
}).listen(port, () => console.log(`Server is running in ${host}:${port}`));