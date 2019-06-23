var fs = require('fs')

fs.readdir('D:/Movie/www', function (err, files) {
  if (err) {
    return console.log('目录不存在aaaa')
  }
  console.log(files)
})
