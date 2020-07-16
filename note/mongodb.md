[👈](./index.md)

## MongoDB

[TOC]

### 关系型数据库与非关系型数据库

#### 关系型数据库

**表**就是关系，或者说表与表之间存在关系。

- 所有的关系型数据库都需要通过 `sql` 语言来操作；

- 所有的关系型数据库在操作之前都需要设计表结构；

- 而且数据还支持约束

  - 唯一的
  - 主键
  - 默认值
  - 非空

  

#### 非关系型数据库 

- 非关系型数据库是基于键值对的；
- 因为基于键值对，所以它非常的灵活，易于扩展；



#### MongoDB

- MongoDB 是由C++语言编写的，是一个基于分布式文件存储的开源数据库系统。
- MongoDB 是长得最像关系型数据库的非关系型数据库；
- MongoDB 不需要设计表结构，可以任意的存数据，不需要关心结构；

- 在 MongoDB 中，数据表就是集合（数组），表记录叫作文档对象



### 安装

1. 下载

   https://www.mongodb.com/try/download/community

2. 安装

3. 设置环境变量

   ```shell
   D:\App\MongoDB\Server\4.2.8\bin
   ```

4. 测试命令

   ```shell
    mongod --version
   ```

   ![image-20200714211648374](C:\Users\LIYU\AppData\Roaming\Typora\typora-user-images\image-20200714211648374.png)



### 启动和关闭数据库

1. 启动

   ```shell
   mongod
   ```

   mongodb 默认使用执行 mongd 命令所处盘符根目录下的 /data/db 文件夹来保存数据，如果没有对应的文件夹，启动会失败。所以在第一次启动之前要手动创建对应文件夹。

   或者使用 `--dbpath` 来指定目录，每次执行都要指定，比较麻烦。

   ```shell
   mogond --dbpath=路径
   ```

   

2. 关闭

   中断命令行即可停止服务。

   

### 连接和退出数据库

1. 连接数据库

   ```shell
   # 默认连接本机的 mongodb 服务
   mongo
   ```

   

2. 关闭

   ```shell
   # 连接状态输入 .exit
   > .exit
   ```

   

### 基本命令

1. `show dbs` 
   - 查看所有数据库
2. `db` 
   - 查看当前操作的数据库
3. `use students`
   - 切换到数据库，如果不存在，稍后插入数据时会自动创建
4. `db.students.insertOne({"name": "Eden"})`
   - 插入数据，如果当前数据库不存在会新建

5. `show collections`
   - 查看当前数据库所有集合
6. `db.student.find()`
   - 查看集合

### 在 Node.js 中操作 MongoDB

#### 使用 mongodb 包

> npm: https://www.npmjs.com/package/mongodb

#### 使用第三方包 mongoose 

> npm： https://www.npmjs.com/package/mongodb
>
> 官网：https://mongoosejs.com/
>
> 菜鸟教程：https://www.runoob.com/mongodb/mongodb-tutorial.html

##### 安装

```shell
npm install mongoose
```

##### hello world

```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/students', {
  useNewUrlParser: true, useUnifiedTopology: true,
});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty
  .save()
  .then(() => {
    console.log('meow');
  });

```

##### Schema 设计表结构

```javascript
// 使用 JavaScript 数据类型来定义
const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number,
  },
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
});
```

将文档结构发布为模型

第一个参数，首字母大写单数，会被转换为小写复数 users 作为集合名称。之后可以通过 User 对象来进行操作。

```javascript
const User = mongoose.model('User', userSchema);
```



##### CRUD

添加

```javascript
const admin = new User({
  username: 'admin',
  password: '123456',
  email: 'admin@admin.com',
});

admin.save()
  .then((value) => {
    console.log(value);
  });
```

查询

```javascript
// 查询全部
User.find()
  .then((value) => {
    console.log(value);
  });

// 按条件查询全部
User.find({ username: 'admin' })
  .then((value) => {
    console.log(value);
  });

// 按条件查询单个
User.findOne({ username: 'admin' })
  .then((value) => {
    console.log(value);
  });
```

删除

```javascript
// 删除第一个
User.deleteOne({ username: 'admin' })
  .then((value) => {
    console.log(value);
  });

// 查找第一个并删除，返回查找到的对象
User.findOneAndDelete({ username: 'admin' })
  .then((value) => {
    console.log(value);
  })
```



更新

```javascript
// 更新第一个
User.updateOne({ username: 'admin' }, {
  password: 'P@ssw0rd',
})
  .then((value) => {
    console.log(value);
  });

// 查找第一个并更新，返回查找到的对象
User.findOneAndUpdate({ username: 'admin' }, {
  password: 'P@1234567',
})
  .then((value) => {
    console.log(value);
  });
```



