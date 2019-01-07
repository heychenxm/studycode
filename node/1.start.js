// console.log("我是一个测试文件");
// console.log(__dirname);
// console.log(__filename);
// console.log(exports);
// console.log(module);

console.log(process.env);
process.nextTick(function(){
    console.log('nextTick')
})