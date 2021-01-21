const http = require('http')
http.createServer((req, res) =>{
    res.write('<h1>Server pelo modulo http<h1>')
    res.end()
}).listen(8080, 'localhost')
console.log(http.maxHeaderSize);