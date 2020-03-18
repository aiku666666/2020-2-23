const Vue=require('vue');
const app=new Vue({
    template:'<div>hello world<span>{{num}}</span></div>',
    data:{
        num:123456
    }
})
const renderer=require('vue-server-renderer').createRenderer(); //创建一个渲染方法
renderer.renderToString(app).then(html => {  //renderer.renderToString(app,function(){})这个方法是可以回调的，如果不给的话他会默认给你返回一个
    console.log(html)   //promise方法。renderer.renderToString(app)返回字符串即源码也是app的实例化
})
