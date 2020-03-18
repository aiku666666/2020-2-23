const path=require('path');
//单个文件打包的
/*module.exports={
    entry:'./index.js', //entry 是个对象，可以经行多个文件打包
    output:{
        path:path.resolve(__dirname ,'dist'),
        filename:'output.bundle.js'
    }
}*/
//多个文件打包
module.exports={
    entry:{
       about:'./about',
       home:'./home'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"[name].bundle.js"
    },
    mode:'development'  //开发模式：'production'和'development'这样打包的时候直接就可以写命令webpack后面就不用加模式了
}
