const path=require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    mode:'development',
    entry:'./index.js', //entry 是个对象，可以经行多个文件打包
    output:{
        path:path.resolve(__dirname ,'dist'),
        filename:'output.bundle.js'
    },
    resolve:{
        alias:{
            'vue':path.resolve(__dirname,'./node_modules/vue/dist/vue.esm.js') //不做这个配置指定vue文件会默认使用runtimevue文件会报错
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
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
    plugins: [
        new HtmlWebpackPlugin({
            template: './template.html'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',  //[name]是入口文件名称
            chunkFilename: '[id].css',
        }),
    ],
    devServer:{
        contentBase:path.join(__dirname,'dist'),  //在哪个文件启动我们服务
        compress:true,  //是否需要压缩
        port:9000, //端口号
    }
}
