import '@babel/polyfill'

const promise = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 10)
  if (random % 2 ===0) {
    resolve()
  } else {
    reject(new Error('错误'))
  }
})