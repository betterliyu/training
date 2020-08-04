const fs = require('fs');
const http = require('http');
const path = require('path');
const template = require('art-template');

const mapFiles = (dir, files, callback) => {
  const fileList = [];
  files.forEach((f) => {
    const pathName = path.join(dir, f.name);
    fs.stat(pathName, (err, stats) => {
      if (err) {
        console.log(err);
        if (callback) callback(err, undefined);
        return err;
      }

      fileList.push({
        name: f.name,
        url: path.join('/', path.relative(__dirname, pathName)),
        isFile: stats.isFile(),
        size: Math.ceil(stats.size / 1024),
        datetime: stats.mtime.toLocaleString(),
      });
      if (fileList.length === files.length) {
        const sortFileList = fileList.sort((a, b) => {
          if (a.isFile && !b.isFile) {
            return 1;
          }
          if (!a.isFile && b.isFile) {
            return -1;
          }
          if (a.name === b.name) {
            return 0;
          }
          return a.name > b.name ? 1 : -1;
        });
        if (callback) callback(undefined, sortFileList);
      }
      return null;
    });
  });
};

http
  .createServer((req, res) => {
    const { url } = req;
    if (url.indexOf('/public') === 0) {
      fs.readFile(path.join(__dirname, './index.html'), (err, data) => {
        if (err) {
          return res.end('404 not found');
        }
        const dirname = path.join(__dirname, url);
        return fs.stat(dirname, (err3, stat) => {
          if (stat && stat.isFile()) {
            fs.readFile(dirname, (err4, file) => {
              if (err) {
                return res.end('404 not found');
              }
              return res.end(file);
            });
          } else {
            fs.readdir(dirname, { withFileTypes: true }, (err1, files) => {
              if (err1) {
                return res.end('404 not found');
              }
              return mapFiles(dirname, files, (err2, stats) => {
                if (err2) {
                  return res.end('404 not found');
                }
                const parent =
                  url === '/public' || url === '/public/'
                    ? null
                    : path.join('/', path.relative(__dirname, path.resolve(dirname, '../')));

                const htmlStr = template.render(data.toString(), {
                  parent,
                  location: url,
                  files: stats,
                });
                return res.end(htmlStr);
              });
            });
          }
        });
      });
    } else {
      res.end('404 not found');
    }
  })
  .listen(3000, () => {
    console.log('server is running...');
  });
