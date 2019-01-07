// 异步的，在当前队列的地步
process.nextTick(function() {
    console.log("nextTick")
})

// setImmediate(function() {
//     console.log("setImmediate")
// })

// setTimeout(function() {
//     // this执行的是timeout自己
//     console.log("setTimeout",this)
// })

// setTimeout(() => {
//     console.log(this)
// })

// console.log([...[1,2,3],...[4,5,6]]);
// console.log({...{school: '123'}, ...{age: '100'}})

