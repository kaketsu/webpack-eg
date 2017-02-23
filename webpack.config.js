var HtmlwebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: __dirname+"/src/main.js", //已多次提及的唯一入口文件
  output: {
    path: __dirname+"/dist", //打包后的文件存放的地方
    filename: "build.js" //打包后输出文件的文件名
  },
  module:{
    loaders:[
    {
        test: /\.css$/, // 一个匹配loaders所处理的文件的拓展名的正则表达式（必须）
        loader: 'style-loader!css-loader' //loader的名称
    },
    {
        test: /\.less$/,
        loader: 'style-loader!css-loader'
    },
    {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/ // 不用转换的node_modules文件夹
    },
    { 
        test: /\.(html|tpl)$/,
        loader: 'html-loader'
    }]
  },
  devServer: {
    contentBase: __dirname+"/dist", //本地服务器所加载的页面所在的目录
    historyApiFallback: true, //不跳转
    inline: true, //实时刷新
    hot: true,
    compress: true
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Hello World app'
    })
  ]
}