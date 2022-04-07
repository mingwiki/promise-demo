var p1 = new Promise(function () { })  //处于pending状态的Promise对象p1
var p2 = Promise.resolve(1)       //处于fulfilled状态的p2
var p3 = Promise.reject('error')  //处于reejected状态的p3