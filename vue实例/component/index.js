//全局组件的写法
Vue.component('alert',{
    template:'<button @click="on_click()">按钮</button>',
    methods:{
        on_click:function(){
            alert('123')
        }
    }
})
new Vue({
    el:'#app'
})
//局部组件的写法
new Vue({
    el:'#app2',
    components:{
        alert2:{
            template:'<button @click="on_click()">按钮2</button>',
            methods: {
                on_click:function () {
                    alert('内部组件')
                }
            }
        }
    }
})
