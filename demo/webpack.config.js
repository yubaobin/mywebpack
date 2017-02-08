const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const appPath = path.resolve(__dirname,'./app/');
const port = 8085;
module.exports = {
	entry: {
		app: path.resolve(appPath,'main')
	},
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: '[name].js'
	},
	//重复的代码打包
	plugins: [
		new webpack.optimize.CommonsChunkPlugin({
	      name: "commons",
	      filename: "commons.js",
	      minChunks: 2,
	    }),
		new HtmlWebpackPlugin({
            title: 'demo', //设置title的名字
            filename: 'index.html', //设置这个html的文件名 
            template: 'index.html',
            inject: true, //把模板注入到哪个标签后 'body'
            minify: false, //生成的html文件压缩
            hash: true, //是否hash
            cache: false, //是否缓存
            showErrors: false //显示错误
        }),
        new ExtractTextPlugin("styles.css"),
        new webpack.ProvidePlugin({ //全局配置加载
           $: "jquery",
           jQuery: "jquery",
           "window.jQuery": "jquery"
        }),
	],
	module: {
		rules:[{
			test: /\.js$/,
			include: appPath,
	        use: [{
	          loader: "babel-loader",
	          options: { presets: ["es2015"] }
	        }],
		},{
	        test: /\.scss$/,
	        loader: ExtractTextPlugin.extract({
	          fallback: "style-loader",
	          loader: ["css-loader","sass-loader"]
	        })
	      }]
	},
	resolve: {
		//自动扩展文件后缀，在使用require时省略后缀名
        extensions: ['.js', '.json', '.jsx', '.vue','.scss'],
        alias: {
        	'style': path.resolve(__dirname,'./app/styles/')
        }
	},
	// 服务器配置相关，自动刷新!
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        port:port
    }
}