import  Vue from  'vue';

//第一种写法
/*new Vue({
    el:'#root',
    template:'<div> this is a template</div>'
})*/
//第二种
var app=new Vue({
    template:'<div> {{text}}-{{num}}</div>',
    data:{
        text:'text',
        num:0
    }
})
app.$mount('#root');
app.$data.text='text2';
setInterval(() => {
    app.$data.num+=1;
},1000)
/*var unWatch=app.$watch('num',(newNum,oldNum) =>{
    console.log(`${newNum}:${oldNum}`)
}) //它会返回一个注销监听事件的方法
setTimeout(() => {
    unWatch()//重新调用后就会注销了监听事件了
},3000)*/
app.$on('test',() => {
    console.log('test emited')
})
app.$emit('test')
