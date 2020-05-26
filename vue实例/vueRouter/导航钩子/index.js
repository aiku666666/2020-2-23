var routes=[
    {
        path:'/',
        component:{
            template:`<div> 首页</div>`
        }
    },
    {
        path:'/login',
        component:{
            template:`<div>登录</div>`
        }
    },
    {
        path:'/user',
        component:{
            template:`<div>用户</div>`
        }
    }
]
var router=new VueRouter({
    routes:routes
})
router.beforeEach(function(to,from,next){
    console.log('to:'+JSON.stringify(to));
    next();
})
router.afterEach(function(to,from){
   console.log('afterEach to:'+JSON.stringify(to));
   console.log('afterEach from:'+JSON.stringify(from));
})
new Vue({
    el:'#app',
    router:router
})
