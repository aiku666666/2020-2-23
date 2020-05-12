let title='2020/4/23';
let tpl=` <div>
                        <h4>${title+`<span>测试模板使用方法${'ok'}</span>`}</h4>
                    </div> `
console.log(tpl)
/*if(true){
    var a=1;
    let b=2
}
console.log('a='+a)
console.log('b='+b)*/
/*var a=2;
function fn(){
    var a=1
    console.log('1=')
    console.log(a)
}
fn();
console.log('2=')
console.log(a)*/
/*var a=1;
function foo(){
    // var a=underfined
    if(false){
        alert('123456')
        var a =1;
    }
    console.log(a) //underfined
}
foo();*/
/*console.log('a:',a);//单独使用的时候报错
var a=1;  //变量提升，将var a=underfined放到最头部优先执行。所以打印出underfined*/
/*let a=1;
if(1){
    let a=2;
    console.log(a) //2
}*/
/*let a={'age':12,'name':"lin"}
const LOVE=a;
LOVE.age=14;
console.log(LOVE,a)*/
/*var [a,c]=[1]
console.log(c)*/
/*var [a,b,c='default',d='default']=[1,2,3]
console.log('a',a)
console.log('c',c)
console.log('d',d)*/

/*
//对象解构
let obj={a:1,b:2}
/!*let {a,b}=obj;
console.log('a',a);
console.log('b',b);*!/

/!*let {c,b}=obj;
console.log('c',c); //c为underfined*!/

/!*let {a:A,b}=obj;
console.log('A',A);
console.log('a',a);*!/

 /!*   //复杂的对象解构
  let obj2={
      arr:[
          'you.',
         {a:1}
      ]
  }
   let {arr:[green,{a}]}=obj2;
   console.log('green:',green)
   console.log('a:',a)*!/
*/
 //其他的结构方式
/*let {length}='yo.';
console.log(length)*/
/*let [a,b,c]='yo.'
console.log(a,b,c)*/
/*let arr=[1,2];
function test([a,b]){
    console.log(a);
    console.log(b);
}
test(arr)*/
/*let obj={b:2}
function test({a=10,b}){
    console.log(a);
    console.log(b);
}
test(obj)*/
/*let title='2020/4/23';
let tpl=` <div>
                <h4>${title+`<span>测试模板使用方法${'ok'}</span>`}</h4>
            </div> `
console.log(tpl)*/

//Symbol
/*let a=Symbol('this is a symbol')
let b=Symbol()
console.log(a == b)*/
/*//file1.js
let name=Symbol();  //由于Symbol的值不一样，
{
    var persion={};
    persion[name]='lin'
    console.log('1',persion)
}
//file2.js
{
    let name=Symbol(); //由于参数name又被let重新定义了，而且这边获取的symbol的值和上游的那一个又是不同的。所以key值都是不一样的
    persion[name]='hui';
    console.log('2',persion)
}
console.log('3',persion)*/

/*let user=new Proxy({},{
    get:function(obj,prop){  //obj对应的是第一个参数,prop是一个字符串
        if(prop == 'full_name'){
            return obj.fname+''+obj.lname
        }
    },
    set:function(){

    }
})
user.fname='Bod';
user.lname='Wood'
console.log('full_name',user.full_name)*/

//set
/*var s=new Set([1,2,3,3,3])
console.log('s',s)*/
