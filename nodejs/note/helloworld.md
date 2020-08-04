[👈](./index.md)

## 编写简单的Node.js 程序

[TOC]

### 编码和解释执行

- 创建文件 `app.js` ，输入 JavaScript 代码；

  ```javascript
  const msg = 'hello world'
  console.log(msg)
  ```

- 打开命令行定位到 `app.js` 所在文件夹，执行 `node app.js `。 输出 `hello world`。

  ```shell
  D:\training.codes\Node.js\heima_training\day01>node app.js
  hello world
  ```

  > 文件名不能是 `node.js` ，不建议使用中文字符。

  

### 没有 DOM 和 BOM 对象

在 node.js 中没有 DOM 和 BOM 对象，尝试使用 `window` 和 `document` 会得到 `undefined`。



### 文件读写

Node.js 中的 JavaScript 具有读取本地文件的能力，在浏览器中没有。在 Node 中使用文件读写功能需要显示引用 `fs` 这个核心模块。

- `fs.readFile()`：读取文件

  - 第一个参数是文件路径；

  - 第二个参数是回调函数，回调函数传回两个参数，分别是错误信息和文件内容。 

    文件中储存的是二进制数据，读取到的是转换后的十六进制字符串，可以通过 `toString()` 方法把十六进制转为可以读懂的文本字符串。

  ```javascript
  // hello.txt 文件内容： 文件读取示例
  // 1. 引用 fs 模块
  var fs = require('fs')
  // 2. 读取文件
  fs.readFile('./data/hello.txt', function (error, data) {
    console.log(data)  // <Buffer e6 96 87 e4 bb b6 e8 af bb e5 8f 96 e7 a4 ba e4 be 8b>
  
    console.log(data.toString())  // This is sample string.
  })
  ```

- `fs.writeFile()`：写入文件

  - 第一个参数是要写入的文件路径；
  - 第二个参数是要写入的内容；
  - 第三个参数是回调函数，参数是一个错误信息。

  ```javascript
  const fs = require('fs')
  
  fs.writeFile('./data/你好.md', '# Sample file', (error) => {
    console.log(error)
  })
  ```



### 简单的 HTTP 服务

使用 Node.js 提供的 http 模块创建简单的服务器。具体步骤如下：

- 引用核心模块 http；

  ```javascript
  const http = require('http')
  ```

- 创建 server 实例；

  ```javascript
  const server = http.createServer()
  ```

- 监听 request 事件，在回调函数中处理请求；

  回调函数接收两个参数，分别是 request 和 response 。

  ```javascript
  // 回调函数接收两个参数  request, response
  server.on('request', (request, response) => {
    console.log("收到请求")
  })
  ```

- 绑定端口号，启动服务器。

  ```javascript
  server.listen('3000', () => {
    console.log("服务器启动成功，访问 http://localhost:3000")
  })
  ```



通过在请求回调函数中判断不同的请求 url 返回对应的响应。

```javascript
server.on('request', (req, res) => {
  const url = req.url
  if (url == '/') {
    res.end('index')
  } else if (url == '/login') {
    res.end('login')
  } else {
    res.end('404')
  }
}
```





