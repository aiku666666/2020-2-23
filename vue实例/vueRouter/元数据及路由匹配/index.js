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
        path:'/a',
        component:{
            template:`<div>A</div>`
        },
        meta:{
            flags:true
        }
    },
    {
        path:'/user',
        component:{
            template:`
                <div>用户
                <router-link to="rain" append>下雨天</router-link>
                <router-view></router-view>
                </div> `
        },
        meta:{
            flags:true,
        },
        children:[
            {
                path:'rain',
                component:{
                    template:`<div>用户测试123456</div> `
                }
            }
        ]
    }
]
var router=new VueRouter({
    routes:routes
})
router.beforeEach(function(to,from,next){
    console.log(to)
    if(to.matched.some(function(item){
        return item.meta.flags
    })){
        next('/login');
    }else{
        next();
    }

})
new Vue({
    el:'#app',
    router:router
})
