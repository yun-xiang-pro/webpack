const loader = require('css-loader')
const path = require('path')
module.exports = {
    entry:'./src/index.ts',
    output:{
        path:path.join(__dirname,'dist'),
        filename:'bundle.js',
        publicPath:'/assets/'
    },
    mode:'development',
    devServer:{
        static:'./src'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:[
                    {
                        loader:'style-loader',
                    },
                    {
                        loader:'css-loader',
                        options:{
                            // loader 的配置参数 用来控制loader的一些行为
                        }
                    }
                ]
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: 'file-loader'
            },
        ]
    }
}

