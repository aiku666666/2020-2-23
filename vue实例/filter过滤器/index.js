//全局的写法
/*Vue.filter('xiugai',function(c){
    return data+'元'
})*/
new Vue({
    el:'#app',
    data:{
        price:'10'
    },
    filters:{
        xiugai:function(data,dw){
            var data=data||0;
            var dw=dw || '元';
            return data+dw
        }

    }
})
