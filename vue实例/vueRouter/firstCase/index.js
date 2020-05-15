var routes=[
    {
        path:'/',
        component:{
            template:`<div> 首页</div>`
        }
    },
    {
        path:'/about',
        component:{
            template:`<div>关于我们</div>`
        }
    }
]
var router=new VueRouter({
    routes:routes
})
new Vue({
    el:'#app',
    router:router
})
