const http = require('http')
http.createServer(function(request, response){
    response.end('Server_Test')
}).listen(3000)