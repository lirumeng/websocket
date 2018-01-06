# 基于WebSocket的火拼俄罗斯方块
[慕课网-基于WebSocket火拼俄罗斯](https://www.imooc.com/learn/861)课程小游戏

实例效果图
![效果图](./static/images/20180106-123114.png)

## 必备知识
- HTML + CSS 基础
- JavaScript
- NodeJS

## WebSocket
- 官网：[http://www.websocket.org](http://www.websocket.org)
- HTML5
- Web端的socket，server和client可以相互发送消息
- 本质是TCP链接

## socket.io框架 
- 可以直接发送和接收js对象
- 可自定义消息

emit为发送，on为接收

### socket.emit
向socket所代表的客户端发送消息
### io.emit
进行广播

## WebSocket特点
- 允许浏览器和服务器建立持久连接
- HTML5的websoket API
- 服务器端使用ndoejs-websocket实现websocket server
- 使用socket.io实现websocket