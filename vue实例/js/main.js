var app=new Vue({
    el:'#app',
    data:{
        data:'测试5566'
    },
    methods:{
        alerts:function(fn){
            alert(fn)
        },
        onEnter:function () {
            console.log('mouseenter')
        },
        onOut:function () {
            console.log('mouseleave')
        },
        onSubmit:function (e) {
            e.preventDefault(); //禁止默认事件
            console.log('onSubmited')
        },
        onEnter:function (e) {
            console.log('enter')
        }
    }
})
