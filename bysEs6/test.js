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
let title='2020/4/23';
let tpl=` <div>
                <h4>${title+`<span>测试模板使用方法${'ok'}</span>`}</h4>
            </div> `
console.log(tpl)
