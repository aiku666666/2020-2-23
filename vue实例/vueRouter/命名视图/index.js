var routes=[
    {
        path:'/',
        component:{
            template:`<div> 首页</div>`
        }
    },
    {
        path:'/user',
        components:{  //多个组件
            silder:{
                template:`<ul> <li>用户管理1</li> <li>用户管理2</li>      </ul> `
            },
            content:{
                template:`<div>用户管理测试 </div>`
            }
        }
    },
    {
        path:'/root',
        components:{  //多个组件
            silder:{
                template:`<ul> <li>系统管理1</li> <li>系统管理2</li>      </ul> `
            },
            content:{
                template:`<div>系统管理测试 </div>`
            }
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
