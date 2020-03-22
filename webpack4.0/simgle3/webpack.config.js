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
    entry:'./index.js', //entry 是个对象，可以经行多个文件打包
    output:{
        path:path.resolve(__dirname ,'dist'),
        filename:'output.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/, //匹配文件如果是jsx文件就要改成 /\.(m?js|jsx)$/
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    mode:'development'  //开发模式：'production'和'development'这样打包的时候直接就可以写命令webpack后面就不用加模式了
}
