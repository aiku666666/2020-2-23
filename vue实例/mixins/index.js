var minix={
    data(){
        return {
            visible:false
        }
    },
    methods:{
        flagShow:function(){
            this.visible=!this.visible
        },
        show:function(){
            this.visible=true;
        },
        hide:function () {
            this.visible=false;
        }
    }
}
new Vue({
    el:'#app',
    data:{
        price:'10'
    },
    components:{
        props:{
            template:`<div>
                <button @click="flagShow">点击显示/隐藏</button>
                <div v-if="visible">我是点击显示隐藏</div>    
            </div>`,
            mixins:[minix]
        },
        mouse:{
            template: `<div>
                <p v-on="{mouseover:show,mouseout:hide}">鼠标放上去显示/隐藏提醒</p>
                <span v-if="visible">显示/隐藏提示符</span>
            </div>`,
            mixins:[minix]
        }
    }
})
