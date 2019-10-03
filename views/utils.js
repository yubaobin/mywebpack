const glob = require('glob')
//动态添加入口
const getEntry = () => {
  let entry = {}
   glob.sync('./src/js/**/*.js').forEach((name) => {
    const start = name.indexOf('src/') + 4
    const end = name.length - 3;
    let eArr = [];
    let n = name.slice(start,end)
    n = n.split('/')[1]
    eArr.push(name)
    eArr.push('babel-polyfill')
    entry[n] = eArr
  })
  return entry
}

//动态生成html
const getHtmlConfig = function(name, chunks){
  return {
    template: `./src/views/${name}.html`,
    filename: `views/${name}.html`,
    inject: true,
    hash: false,
    chunks: chunks,
    minify: process.env.NODE_ENV === 'development' ? false : {
      removeComments: true, //移除HTML中的注释
      collapseWhitespace: true, //折叠空白区域 也就是压缩代码
      removeAttributeQuotes: true, //去除属性引用
    }
  }
}

module.exports = {
  getEntry,
  getHtmlConfig
}