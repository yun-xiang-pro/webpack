// webpack enforce  pre post
// loader pre inline normal post
rules:[
    {
        test:/\.js$/,
        use:['eslint-loader'],
        enforce:'pre'
    }
]
// babel-loader

// npm install babel-loader @babel/Core @babel/preset-env 
// yarn add babel-loader @babel/core @babel/preset-env 

rules:[
  {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory:true,
          presets: [['@babel/preset-env', {modules:false}]]
        }
      }
  }
]

// node_modules/.cache/babel-loader目录
.babelrc 

// ts-loader

/// npm install ts-loader typescript  
// yarn add ts-loader typescript --dev

rules:[
  {
      test: /\.ts$/,
      exclude: /node_modules/,
      use: 'ts-loader'
  }
]

tsconfig.json
// {
//   "compilerOptions":{
//     "target":"es5",
//     "sourceMap":true
//   },
//   "include": [
//       "src/**/*"
//   ],
//   "exclude": [
//       "examples",
//       "index.d.ts",
//       "node_modules",
//       "dist"
//   ],
// }


// vue-loader
// yarn add html-webpack-plugin
