function a(str){
    console.log(document.querySelectorAll(str))
}
// js 添加头部和底部

export {a}
if(module.hot){
    module.hot.accept('./print.js',function(){
        console.log('Acception')
    })
}
