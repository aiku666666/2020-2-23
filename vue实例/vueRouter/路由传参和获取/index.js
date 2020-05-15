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
    },
    {
        path:'/user/:name',
        component:{
            template:`<div>我叫：{{$route.params.name}}</div>`
        }
    },
    {
        path:'/users',
        component:{
            template:`<div>我叫：{{$route.query.name}}</div>`
        }
    },

]
var router=new VueRouter({
    routes:routes
})
new Vue({
    el:'#app',
    router:router
})
