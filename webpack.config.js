const loader = require('css-loader')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { plugins } = require('@babel/preset-env/lib/plugins-compat-data');
const { VueLoaderPlugin } = require('vue-loader');
module.exports = {
    entry:'./src/main.js',
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
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new VueLoaderPlugin()
    ]
}

