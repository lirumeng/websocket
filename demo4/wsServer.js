var ws = require("nodejs-websocket");
var PORT = 3000;
// 不止一个客户端连接
var clientCount = 0;
var server = ws.createServer(function (conn) {
    clientCount++;
    conn.nickname = 'user' + clientCount;
    var msg = {};
    msg.type = 'enter';
    msg.data = conn.nickname + ' comes in.';
    broadcast(JSON.stringify(msg));
    conn.on("text", function (str) {
        console.log("Received " + str);
        msg = {};
        msg.type = 'message';
        msg.data = conn.nickname + ' says: ' + str;
        broadcast(JSON.stringify(msg));
    });
    conn.on("close", function (code, reason) {
        console.log("Connection closed");
        msg = {};
        msg.type = 'leave';
        msg.data = conn.nickname + ' left.';
        broadcast(JSON.stringify(msg));
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