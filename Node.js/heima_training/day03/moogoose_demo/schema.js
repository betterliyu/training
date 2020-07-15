const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/schemaTest', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
});

// 设计文档结构

// const blogSchema = new mongoose.Schema({
//   title: String,
//   author: String,
//   body: String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs: Number,
//   },
// });

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

// 将文档结构发布为模型
// 第一个参数，首字母大写单数，会被转换为小写复数 users 作为集合名称
const User = mongoose.model('User', userSchema);

// 操作 users 集合
// 插入
const admin = new User({
  username: 'admin',
  password: '123456',
  email: 'admin@admin.com',
});

admin.save()
  .then((value) => {
    console.log(value);
  });

// 查询
User.find()
  .then((value) => {
    console.log(value);
  });

User.find({ username: 'admin' })
  .then((value) => {
    console.log(value);
  });

User.findOne({ username: 'admin' })
  .then((value) => {
    console.log(value);
  });

// 删除
// User.deleteOne({ username: 'admin' })
//   .then((value) => {
//     console.log(value);
//   });

// User.findOneAndDelete({ username: 'admin' })
//   .then((value) => {
//     console.log(value);
//   });

// 修改
User.updateOne({ username: 'admin' }, {
  password: 'P@ssw0rd',
})
  .then((value) => {
    console.log(value);
  });

User.findOneAndUpdate({ username: 'admin' }, {
  password: 'P@1234567',
})
  .then((value) => {
    console.log(value);
  });
