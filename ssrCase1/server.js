const express=require('express');
const Vue=require('vue');
const fs=require('fs'); //node自带的读取文件插件
const server=express();
const renderer=require('vue-server-renderer').createRenderer();
function creatUrl(url){
    if(url=='/'){
        url='/index'
    }
    return new Vue({
        template:fs.readFileSync('template'+url+'.html') //readFileSync同步读取，异步的话容易出问题
    })
}
server.get('*',(req,res) => { //url包含在req里面
    var app=creatUrl(req.url);
    renderer.renderToString(app).then(html => {
        res.end(html)
    })
})
server.listen(7070)
