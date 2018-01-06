var ws = require("nodejs-websocket");
var PORT = 3000;
// 不止一个客户端连接
var clientCount = 0;
var server = ws.createServer(function (conn) {
    clientCount++;
    conn.nickname = 'user' + clientCount;
    broadcast(conn.nickname + ' comes in.');
    conn.on("text", function (str) {
        console.log("Received " + str);
        broadcast(conn.nickname + ' says ' + str);
    });
    conn.on("close", function (code, reason) {
        console.log("Connection closed");
        broadcast(conn.nickname + ' left.');
    });
    conn.on('error', function (err) {
        console.log('handle err');
        console.log(err);
    });
}).listen(PORT);

console.log('websocket server listening on port' + PORT);

function broadcast(str){
    server.connections.forEach(function(connection){
        connection.sendText(str);
    })
}