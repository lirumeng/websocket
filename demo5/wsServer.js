var app = require('http').createServer();
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(3000);

io.on('connection', function (socket) {
    // emit (可自定义事件) 发送数据
    socket.emit('news', {hello: 'world'});
    socket.on('my other event', function (data) {
        console.log(data);
    });
});