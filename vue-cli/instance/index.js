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
