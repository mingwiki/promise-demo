const delayer = (t) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(t)
  }, t)
})


delayer(1000).then(t => {
  console.log(t)
  return t + 1000    //返回普通值
}).then(t => {
  console.log(t)
  console.log('end')
})