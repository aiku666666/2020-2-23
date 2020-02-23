import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import  axios  from 'axios'
//一定要引入promise要不然会告诉你promise找不到
import Promise from 'es6-promise'
Promise.polyfill();
describe('HelloWorld.vue', () => {
  //语法 before和after的钩子
  before(() => {
    console.log('1') //在所有实例it执行前先会出现1
  });
  after(() => {
    console.log('3') //在所有实例it执行后出现3
  });
  beforeEach(() => { //每一个用例执行之前都会触发

  });
  afterEach(() => {

  });
  it.only('ONLY FUNCTION',() => { //在describe有it.only的话就只会执行这个测试用例

  })
  // 拿到helloworld 的构造函数
  const Constructor = Vue.extend(HelloWorld)
  // 新建这个组件的构造函数，也就是这个组件的this
  const vm = new Constructor().$mount()
  it('should render correct contents', () => {
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
  it('should add correct total', () => {
    expect(vm.add(1, 2))
      .to.equal(3)
  })
  // 异步操作的时候的测试
  it('async m2 should return 4', () => {
    const m2 = vm.m2
    // 回调是解决异步编程的最佳方式之一
    m2(2,2,(data) => {
      expect(data).to.equal(4)
    })
    /*promise的时候
    m2().then((res) => {
      expect(res).to.equal(4)
    })*/
  })
  //模拟数据
  it('数据被请求', () => {
   /* //spy,stub,MOCK
    const getmes1 = vm.getmes1
     //spy 包装一个间谍函数，就是在接口无法请求到的时候不去注释接口请求自己包装一个.获取信息，并不会阻止执行
    let axiosspy=sinon.spy(axios,'get'); //sinon.spy你要屏蔽的方法
    getmes1(axiosspy);
    console.log(axiosspy.callCount) //axiosspy.callCount获取方法请求次数
    //stub 完完全全的屏蔽请求，拦截请求*/
    //实际应用的时候是2个混合应用
    const getmes = vm.getmes;
    let axiosstub=sinon.stub(axios,'get') //首先先屏蔽请求，禁止发送
    let axiosspy=sinon.spy(() => { //模拟接口请求希望获得的结果
      return 4
    });
    expect(getmes(axiosspy)).to.equal(4); //getmes调用的时候必须传入axiosspy
    axiosstub.restore() //restore() 重置
  })
})
