new Promise((resolve, reject) => {
  let v = Math.random()
  if (v > 0.5) {
    resolve(v)
  } else {
    reject('less than 0.5')
  }
}).then(v => {
  console.log(v)
}, reason => {
  console.error(reason)
})