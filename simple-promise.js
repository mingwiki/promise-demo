    class Promise2 {
      succeed = null
      fail = null
      state = 'pending'
      resolve(result) {
        setTimeout(() => {
          this.state = 'fulfilled'
          this.succeed(result)
        })
      }
      reject(reason) {
        setTimeout(() => {
          this.state = 'rejected'
          this.fail(reason)
        })
      }
      constructor(fn) {
        fn(this.resolve, this.reject.bind(this))
      }
      then(succeed, fail) {
        this.succeed = succeed
        this.fail = fail
        
      }
    }

    new Promise2((resolve, reject) => {
      let xhr = new XMLHttpRequest()
      xhr.open("GET", "http://127.0.0.1:5000/getInfo", true)
      console.log(xhr)
      xhr.onload = function () {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText))
        } else {
          reject(`获取随机个人信息失败`)
        }
      }
      xhr.send()

    }).then(function(n) {
      console.log(n)
      return 3
    }, reason => console.log(reason))
