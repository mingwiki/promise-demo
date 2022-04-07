delayer(1000).then(t => {
  console.log(t)
  return delayer(2000)
}).then(t => {
  console.log(t)
  console.log('end')
})
delayer(1000).then(t => {
  console.log(t)
  return Promise.resolve(2000)
}).then(t => {
  console.log(t)
  console.log('end')
})