// 引用 http 核心模块
const http = require('http');

// 创建 server 示例
const server = http.createServer();

// 监听请求
server.on('request', (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end(`收到请求: ${req.socket.remoteAddress}${req.socket.remotePort}`);
});

// 绑定端口号，启动服务器
server.listen('3000', () => {
  console.log('服务器启动成功，访问 http://localhost:3000');
});
