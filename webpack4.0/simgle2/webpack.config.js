const path=require('path');
module.exports={
    entry:'./index.js', //entry 是个对象，可以经行多个文件打包
    output:{
        path:path.resolve(__dirname ,'dist'),
        filename:'output.bundle.js'
    },
    mode:'development',
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit:20333811,
                        },
                    },
                ],
            },
        ],
    },
}
