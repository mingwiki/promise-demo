
delayer(1000).then(t => {
  console.log(t)
  return {
    then(resolvePromise, rejectPromise) {
      console.log('in then')
      resolvePromise(3000)
      //rejectPromise('eee')
    }
  }
}).then(t => {
  console.log(t)
  console.log('end')
}, e => {
  console.log('error')
  console.log(e)
})