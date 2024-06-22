1. 初始化项目

   npm init 或者 yarn init
2. 安装webpack

   yarn add webpack --dev 或者 yarn global add webpack（全局安装）
3. yarn add webpack-cli 安装命令工具
4. # npx webpack -v 检测是否安装成功
5. # npx webpack --entry=./index.js --output-filename=bundle.js --mode=development


   ```
   module.exports = function(content,map,meta) {
   var c = this,.async;
   var result = hander(content,map,meta); // 转换后的内容
     callback(
     null,
     result.content,
     rsult.map,
      result,meta
      )
   }
   ```

webpack-dev-server

npm install webpack-dev-server --save-dev or yarn add webpack-dev-server --dev

npm install css-loader style-loader 或者
yarn add css-loader  style-loader

resource(test,exclude,include) 和 issuer加载者去配置的

// index.js

import './style.css'

module.exports = function(content,map,meta) {
var c = this.async;
var result = hander(content,map,meta); // 转换后的内容
callback(
null,
result.content,
rsult.map,
result,meta
)
}

## loader exclude 和 include

## resource 和 issuer配置

// index.js  加载者   （）

import 'style.css' 被加载  （resource）

```
rules:[
            {
                test:/\.css$/,
                use:['style-loader', 'css-loader']，
                exclude:/node_modules/,
                issuer:{
                  test:/\.js$/,
                  include:/src/pages/
                }

            }
]
```

```

 rules:[
            {
                use:['style-loader', 'css-loader'],
                resource:{
                    test: /\.css$/,
                     exclude:/node_modules/,
                },
                issuer:{
                  test:/\.js$/,
                  include:/src\/pages/
                }
            }
        ]

```
