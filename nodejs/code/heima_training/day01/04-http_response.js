// 引用 http 核心模块
const http = require('http');

// 创建 server 示例
const server = http.createServer();

// 监听请求，回调函数接收两个参数  request, response
server.on('request', (req, res) => {
  const { url } = req;
  if (url === '/') {
    res.end('index');
  } else if (url === '/login') {
    res.end('login');
  } else {
    res.end('404');
  }
});

// 绑定端口号，启动服务器
server.listen('3000', () => {
  console.log('服务器启动成功，访问 http://localhost:3000');
});
