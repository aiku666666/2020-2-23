Vue.component('parents',{
    template:`
    <div>
       <children @showLog="showFlag"></children> 
       <span v-if="flag">您的余额为20元</span>
    </div>
    `,
    data(){
        return {
            flag:false
        }
    },
    methods:{
        showFlag:function(data) {
            this.flag=true;
            console.log(data)
        }
    }
})
Vue.component('children',{
    template:'<button @click="on_click()">显示余额</button>',
    methods:{
        on_click:function(){
            this.$emit('showLog',{a:1,b:2}) //发射器
        }
    }
})
new Vue({
    el:'#app'
})
