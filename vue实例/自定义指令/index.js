//全局自定义指令
Vue.directive('pin',function (el,binding) {
    let flag=binding.value;
    if(flag){
        el.style.position='fixed';
        el.style.left='200px';
        el.style.top='300px';
    }else{
        el.style.position='static';
    }
})
new Vue({
    el:'#app',
    data:{
        card1:{
            fl:false
        },
        card2:{
            fl:false
        }
    }
})
