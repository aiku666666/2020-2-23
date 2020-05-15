var Even=new Vue({}) //新建一个vue做中间调度，这样数据通讯可以借用第三方走
Vue.component('huahua',{
    template:'<div>我说:<input @keyup="change()" v-model="Isaid">{{Isaid}}</div>',
    data(){
        return {
            Isaid:''
        }
    },
    methods:{
        change:function () {
            Even.$emit('getHuahua',this.Isaid)
        }
    }
})
Vue.component('huanghuang',{
    template:'<div>huahua:<input v-model="huahua_said"></div>',
    data(){
        return {
            huahua_said:''
        }
    },
   mounted() {
        var _this=this;
       Even.$on('getHuahua',function (data) {
           _this.huahua_said=data;
       })
   }
})
new Vue({
    el:'#app'
})
