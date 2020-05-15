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
        name:'user',
        component:{ /*<router-link :to="'/user/'+$route.params.name+'/more'">更多</router-link>*/
            template:`<div>
                        我叫：{{$route.params.name}}
                        <router-link to="more" append>更多</router-link>
                        <router-view></router-view>
                    </div>`
        },
        children:[
            {
                path:'more',
                component:{
                    template:`
                        <div>用户信息{{$route.params.name}}
                         <span>二u哦额u哦亲哦大家了解到了单独，当年开始的开始的开始对接电视上看到数据库是的接口的接口打开手机打开</span>  
                        </div>      
                    `
                }
            }
        ]
    }

]
var router=new VueRouter({
    routes:routes
})
new Vue({
    el:'#app',
    router:router,
    methods:{
        sufter:function () {
            setTimeout(function () {
                this.router.push('/about')
                setTimeout(function () {
                    this.router.push({name:'user',params:{name:'王花花'}})

                },2000)
            },2000)
        }
    }
})
